namespace NordicFinancialNews.Requests.IndicesApi;

/// <summary>
/// The inputs of the GetApiV1Indices operation.
/// </summary>
public sealed record GetApiV1IndicesRequest
{
    /// <summary>
    /// Number of indices to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor from a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Filter by exchange MIC code, comma-separated for multiple (e.g. <c>XSTO</c>, <c>XSTO,XHEL</c>). Only active exchanges match.
    /// </summary>
    public string? Exchange { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Available fields: <c>id</c>, <c>name</c>, <c>symbol</c>, <c>pan_nordic</c>, <c>exchange</c>.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
