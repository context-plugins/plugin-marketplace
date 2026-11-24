namespace NordicFinancialNews.Requests.IndicesApi;

/// <summary>
/// The inputs of the GetApiV1IndicesByIdentifierCompanies operation.
/// </summary>
public sealed record GetApiV1IndicesByIdentifierCompaniesRequest
{
    /// <summary>
    /// Index ID or symbol (e.g. <c>OMXS30</c>)
    /// </summary>
    public required string Identifier { get; init; }

    /// <summary>
    /// Number of companies to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor from a previous response.
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
