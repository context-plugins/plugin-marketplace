using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;

namespace NordicFinancialNews.Core.Pagination;

public sealed class Pageable<TPage, TItem> : IAsyncEnumerable<TItem>
{
    private readonly IAsyncEnumerable<TPage> _pages;
    private readonly Func<TPage, IReadOnlyList<TItem>?> _itemsSelector;

    internal Pageable(IAsyncEnumerable<TPage> pages, Func<TPage, IReadOnlyList<TItem>?> itemsSelector)
    {
        _pages = pages;
        _itemsSelector = itemsSelector;
    }

    public async IAsyncEnumerator<TItem> GetAsyncEnumerator(CancellationToken cancellationToken = default)
    {
        await foreach (var page in _pages.WithCancellation(cancellationToken).ConfigureAwait(false))
        foreach (var item in _itemsSelector(page) ?? [])
            yield return item;
    }

    public async IAsyncEnumerable<TPage> AsPages(
        [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        await foreach (var page in _pages.WithCancellation(cancellationToken).ConfigureAwait(false))
            yield return page;
    }
}
