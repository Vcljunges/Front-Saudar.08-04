import { students } from "../date/students";

export default function Notas() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-white/40 dark:border-slate-700/50 backdrop-blur-sm">
        
        {/* Cabeçalho da Tabela */}
        <div className="p-6 md:p-8 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Lista de Alunos</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Acompanhe as notas e a média final dos alunos.</p>
          </div>
          <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 py-1 px-3 rounded-full text-sm font-semibold border border-indigo-200 dark:border-indigo-800/50 shadow-sm">
            {students.length} Alunos
          </span>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead className="bg-slate-50/50 dark:bg-slate-800/40 text-xs uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider">
              <tr>
                <th className="px-6 py-5">Aluno</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-center">Nota 1</th>
                <th className="px-6 py-5 text-center">Nota 2</th>
                <th className="px-6 py-5 text-center">Média Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
              {students.map((student) => {
                const media = (student.grade1 + student.grade2) / 2;
                const aprovado = media >= 7;
                
                return (
                  <tr 
                    key={student.id} 
                    className={`group transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/30 ${!student.active ? 'opacity-60 grayscale' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={student.avatar} 
                          alt={`Avatar de ${student.name}`} 
                          className="w-11 h-11 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-300"
                        />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-gray-100 text-base">{student.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span 
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${!student.active ? 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20' : aprovado ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' : 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'}`}
                      >
                        {student.active ? aprovado ? "Aprovado" : "Reprovado" : "Inativo"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-base">{student.grade1.toFixed(1)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-base">{student.grade2.toFixed(1)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-lg font-black ${!student.active ? 'text-slate-400 dark:text-slate-500' : aprovado ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                        {student.active ? media.toFixed(1) : '-'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
