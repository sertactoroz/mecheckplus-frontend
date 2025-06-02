import React, { useEffect, useState } from "react";

interface Task {
    _id: string;
    taskDefinition: string;
    customTitle?: string;
    isCompleted: boolean;
    value?: number;
    unit?: string;
    note?: string;
}

interface Checklist {
    _id: string;
    title: string;
    tasks: Task[];
    startDate: string;
}

const VITE_API_URL = "http://localhost:5001/api/checklists";

const ChecklistList: React.FC = () => {
    const [checklists, setChecklists] = useState<Checklist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(VITE_API_URL)
            .then(res => {
                if (!res.ok) throw new Error("Veri alınamadı");
                return res.json();
            })
            .then(data => {
                setChecklists(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>Hata: {error}</p>;

    return (
        <div style={{ maxWidth: 600, margin: "20px auto" }}>
            <h2>Checklists</h2>
            {checklists.length === 0 && <p>Henüz checklist yok.</p>}
            <ul>
                {checklists.map(cl => (
                    <li key={cl._id} style={{ marginBottom: 20, border: "1px solid #ccc", padding: 10, borderRadius: 6 }}>
                        <h3>{cl.title}</h3>
                        <p>Başlangıç Tarihi: {new Date(cl.startDate).toLocaleDateString()}</p>
                        <ul>
                            {cl.tasks.map(task => (
                                <li key={task._id}>
                                    {task.customTitle || task.taskDefinition} {task.isCompleted ? "✅" : "❌"}
                                    {task.note && <em> ({task.note})</em>}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChecklistList;
