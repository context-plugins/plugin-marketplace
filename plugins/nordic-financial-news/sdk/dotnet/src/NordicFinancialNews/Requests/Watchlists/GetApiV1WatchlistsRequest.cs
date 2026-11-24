namespace NordicFinancialNews.Requests.Watchlists;

/// <summary>
/// The inputs of the GetApiV1Watchlists operation.
/// </summary>
public sealed record GetApiV1WatchlistsRequest
{
    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
