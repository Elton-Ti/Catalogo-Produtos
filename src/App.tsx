import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-['Outfit'] transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Catálogo Premium
            </h1>
          </div>
        </div>
      </header>
      
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Home />
      </div>

      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 mt-auto">
        <p>© {new Date().getFullYear()} Catálogo Premium. Desenvolvido com excelência.</p>
      </footer>
    </div>
  );
}

export default App;
