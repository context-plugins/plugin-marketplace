using System;
using System.Net.Http.Headers;

namespace Crawl4Ai.Core.Pagination.States;

internal sealed record KeysetState<TResponse> : IPageState<TResponse, KeysetState<TResponse>>
{
    private readonly Func<TResponse, string?> _nextKey;
    private readonly Func<TResponse, HttpResponseHeaders, bool?>? _hasMore;

    internal KeysetState(
        Func<TResponse, string?> nextKey,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore)
    {
        _nextKey = nextKey;
        _hasMore = hasMore;
    }

    public required string? Key { get; init; }

    public required long Limit { get; init; }

    public KeysetState<TResponse>? Next(TResponse page, HttpResponseHeaders headers, int itemCount)
    {
        if (itemCount == 0)
            return null;

        var hasMore = _hasMore?.Invoke(page, headers);

        if (hasMore is false)
            return null;

        if (hasMore is null && itemCount < Limit)
            return null;

        var nextKey = _nextKey(page);

        if (nextKey is not { Length: > 0 })
            return null;

        if (nextKey == Key)
            return null;

        return this with { Key = nextKey };
    }
}

internal static class KeysetState
{
    internal static KeysetState<TResponse> Create<TResponse>(
        string? key,
        long limit,
        Func<TResponse, string?> nextKey,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore = null) =>
        new(nextKey, hasMore) { Key = key, Limit = limit };
}
