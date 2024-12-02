import React from "react";

function InsightsTable({ insights }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Entity</th>
                    <th>Label</th>
                </tr>
            </thead>
            <tbody>
                {insights.map((item, index) => (
                    <tr key={index}>
                        <td>{item.text}</td>
                        <td>{item.label}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default InsightsTable;
