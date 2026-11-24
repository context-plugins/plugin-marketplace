using System;
using System.Net.Http.Headers;

namespace GoogleCloudTalentSolution.Core.Pagination.States;

internal sealed record PageState<TResponse> : IPageState<TResponse, PageState<TResponse>>
{
    private readonly long? _limit;
    private readonly Func<TResponse, HttpResponseHeaders, bool?>? _hasMore;
    private readonly Func<TResponse, HttpResponseHeaders, long?>? _totalPages;

    internal PageState(
        long? limit,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore,
        Func<TResponse, HttpResponseHeaders, long?>? totalPages)
    {
        _limit = limit;
        _hasMore = hasMore;
        _totalPages = totalPages;
    }

    public required long? Page { get; init; }

    public PageState<TResponse>? Next(TResponse page, HttpResponseHeaders headers, int itemCount)
    {
        var totalPages = _totalPages?.Invoke(page, headers);
        var currentPage = Page ?? 1;     // normalize null to 1 in second iteration

        if (totalPages is { } pages && currentPage >= pages)
            return null;

        if (_hasMore?.Invoke(page, headers) is { } hasMore)
            return hasMore ? this with { Page = currentPage + 1 } : null;

        if (itemCount == 0)
            return null;

        if (totalPages is null && _limit is { } limit && itemCount < limit)
            return null;

        return this with { Page = currentPage + 1 };
    }
}

internal static class PageState
{
    internal static PageState<TResponse> Create<TResponse>(
        long? page,
        long? limit,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore = null,
        Func<TResponse, HttpResponseHeaders, long?>? totalPages = null) =>
        new(limit, hasMore, totalPages) { Page = page };
}
