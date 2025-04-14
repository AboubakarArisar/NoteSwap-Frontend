import React, { useState, useEffect } from "react";

function LeaderBoard() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Mock data for demonstration
        const mockPlayers = [
            { id: 1, name: "Ahmed", score: 120, picture: "https://via.placeholder.com/50" },
            { id: 2, name: "Babar", score: 110, picture: "https://via.placeholder.com/50" },
            { id: 3, name: "Chachar", score: 100, picture: "https://via.placeholder.com/50" },
            { id: 4, name: "Dawood", score: 90 },
            { id: 5, name: "Esha ", score: 85 },
            { id: 6, name: "Fatima", score: 80 },
            { id: 7, name: "Jinnah", score: 75 },
            { id: 8, name: "Abu Bakar", score: 70 },
        ];
        setPlayers(mockPlayers);
    }, []);

    return (
        <>
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">LeaderBoard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {players.slice(0, 3).map((player, index) => (
                    <div
                        key={player.id}
                        className={`bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 rank-${index + 1}`}
                        style={{ height: "150px" }} // Increased height
                    >
                        <img
                            src={player.picture}
                            alt={`${player.name}'s avatar`}
                            className="w-16 h-16 rounded-full border-2 border-blue-500"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{player.name}</h2>
                            <p className="text-gray-600">Score: {player.score}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Rank</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.slice(3, 8).map((player, index) => (
                            <tr
                                key={player.id}
                                className="border-b hover:bg-gray-100 transition-colors duration-200"
                            >
                                <td className="py-3 px-6">{index + 4}</td>
                                <td className="py-3 px-6">{player.name}</td>
                                <td className="py-3 px-6">{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default LeaderBoard;