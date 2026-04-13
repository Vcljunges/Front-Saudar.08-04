import { students } from "../date/students";
import { Student } from "../types/students";

export interface StudentTableProps {
    students: Student[];
}

export function StudentTable({ students }: StudentTableProps) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Grade 1</th>
                <th>Grade 2</th>
                <th>Average</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>{students.map((student) => student.active ? "Aprovado" : "Reprovado")}</td>
                <td>{students.map((student) => student.name)}</td>
                <td>{students.map((student) => student.email)}</td>
                <td>{students.map((student) => student.grade1)}</td>
                <td>{students.map((student) => student.grade2)}</td>
                <td>{students.map((student) => (student.grade1 + student.grade2) / 2)}</td>
            </tr>
        </table> 
    );
}
