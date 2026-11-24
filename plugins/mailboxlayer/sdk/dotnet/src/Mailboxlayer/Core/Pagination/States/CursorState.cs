using System;
using System.Net.Http.Headers;

namespace Mailboxlayer.Core.Pagination.States;

internal sealed record CursorState<TResponse> : IPageState<TResponse, CursorState<TResponse>>
{
    private readonly Func<TResponse, HttpResponseHeaders, string?> _nextCursor;
    private readonly Func<TResponse, HttpResponseHeaders, bool?>? _hasMore;

    internal CursorState(
        Func<TResponse, HttpResponseHeaders, string?> nextCursor,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore)
    {
        _nextCursor = nextCursor;
        _hasMore = hasMore;
    }

    public required string? Cursor { get; init; }

    public CursorState<TResponse>? Next(TResponse page, HttpResponseHeaders headers, int itemCount)
    {
        var next = _nextCursor(page, headers);

        if (next is not { Length: > 0 })
            return null;

        if (next == Cursor)
            return null;

        if (_hasMore?.Invoke(page, headers) is false)
            return null;

        return this with { Cursor = next };
    }
}

internal static class CursorState
{
    internal static CursorState<TResponse> Create<TResponse>(
        string? cursor,
        Func<TResponse, HttpResponseHeaders, string?> nextCursor,
        Func<TResponse, HttpResponseHeaders, bool?>? hasMore = null) =>
        new(nextCursor, hasMore) { Cursor = cursor };
}
