import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const isAvailable = product.status === "available";

  return (
    <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-indigo-900/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md ${
              isAvailable
                ? "bg-emerald-500/90 text-white shadow-sm"
                : "bg-rose-500/90 text-white shadow-sm"
            }`}
          >
            {isAvailable ? "Disponível" : "Esgotado"}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
          <p className="text-xl font-extrabold text-slate-900 dark:text-white">
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
          <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isAvailable ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`} disabled={!isAvailable}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
