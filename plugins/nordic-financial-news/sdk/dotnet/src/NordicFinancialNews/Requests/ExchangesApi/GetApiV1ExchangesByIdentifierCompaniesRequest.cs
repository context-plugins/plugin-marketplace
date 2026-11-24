namespace NordicFinancialNews.Requests.ExchangesApi;

/// <summary>
/// The inputs of the GetApiV1ExchangesByIdentifierCompanies operation.
/// </summary>
public sealed record GetApiV1ExchangesByIdentifierCompaniesRequest
{
    /// <summary>
    /// Exchange ID or MIC code (e.g. <c>XSTO</c>)
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
