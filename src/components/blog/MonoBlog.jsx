const MonoBlog = ({ data, onReadMore }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-64 object-cover"
        />
        {data?.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-picto-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] uppercase tracking-[0.2em] text-gray-500">
          <span>{data?.category}</span>
          <span>{data?.readingTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {data?.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {data?.summary}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm font-medium">
          <button
            type="button"
            onClick={onReadMore}
            className="rounded-full bg-picto-primary px-4 py-2 text-white transition hover:bg-picto-primary-dark"
          >
            Read More →
          </button>
          <span className="text-gray-400">{data?.date}</span>
        </div>
      </div>
    </div>
  );
};

export default MonoBlog;
