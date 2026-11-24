namespace NordicFinancialNews.Requests.Watchlists;

/// <summary>
/// The inputs of the GetApiV1WatchlistsById operation.
/// </summary>
public sealed record GetApiV1WatchlistsByIdRequest
{
    /// <summary>
    /// Watchlist ID (e.g. <c>a1b2c3d4e5f6</c>).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Number of companies to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor returned as <c>pagination.next_cursor</c> from a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
