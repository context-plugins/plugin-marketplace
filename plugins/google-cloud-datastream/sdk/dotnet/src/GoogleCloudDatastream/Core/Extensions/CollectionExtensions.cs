using System;
using System.Collections.Generic;
using System.Linq;

namespace GoogleCloudDatastream.Core.Extensions;

internal static class CollectionExtensions
{
    extension<TSource>(IReadOnlyList<TSource> source)
    {
        public IReadOnlyList<TResult> Map<TResult>(Func<TSource, TResult> selector) =>
            source.Select(selector).ToList();
    }

    extension<TSource>(IReadOnlyDictionary<string, TSource> source)
    {
        public IReadOnlyDictionary<string, TResult> Map<TResult>(Func<TSource, TResult> selector) =>
            source.ToDictionary(kv => kv.Key, kv => selector(kv.Value));
    }

    extension<TSource>(IReadOnlyList<IReadOnlyDictionary<string, TSource>> source)
    {
        public IReadOnlyList<IReadOnlyDictionary<string, TResult>> Map<TResult>(Func<TSource, TResult> selector) =>
            source.Select(d => d.Map(selector)).ToList();
    }

    extension<TSource>(IReadOnlyDictionary<string, IReadOnlyList<TSource>> source)
    {
        public IReadOnlyDictionary<string, IReadOnlyList<TResult>> Map<TResult>(Func<TSource, TResult> selector) =>
            source.ToDictionary(kv => kv.Key, kv => kv.Value.Map(selector));
    }
}
