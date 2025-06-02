import React, { useState, useEffect } from 'react';
import { TaskDefinition } from '../types/taskDefinition';
import { fetchPopularTasks } from '../services/taskService';

const TaskLibrary: React.FC = () => {
    const [popularTasks, setPopularTasks] = useState<TaskDefinition[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPopularTasks = async () => {
            try {
                setLoading(true);
                const tasks = await fetchPopularTasks();
                setPopularTasks(tasks);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Görevler yüklenirken hata oluştu');
            } finally {
                setLoading(false);
            }
        };

        loadPopularTasks();
    }, []);

    if (loading) return <p className="text-center text-gray-600">Popüler görevler yükleniyor...</p>;
    if (error) return <p className="text-center text-red-600">Hata: {error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Popüler Görevler</h2>
            {popularTasks.length === 0 ? (
                <p className="text-center text-gray-500">Henüz popüler görev yok.</p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {popularTasks.map(task => (
                        <div
                            key={task._id}
                            className="border border-gray-200 p-4 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                {task.title}
                            </h3>

                            <p className="text-gray-600 mb-3">
                                {task.description}
                            </p>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                isPublic: {task.isPublic ? 'Genel' : 'Özel'}
                            </h3>
                            {task.createdAt && (
                                <small className="text-gray-400 text-sm">
                                    Oluşturulma: {new Date(task.createdAt).toLocaleDateString()}
                                </small>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskLibrary;
