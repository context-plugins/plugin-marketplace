namespace NordicFinancialNews.Requests.CompaniesApi;

/// <summary>
/// The inputs of the GetApiV1CompaniesByIdentifier operation.
/// </summary>
public sealed record GetApiV1CompaniesByIdentifierRequest
{
    /// <summary>
    /// Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. <c>VOLV-B.ST</c>); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup.
    /// </summary>
    public required string Identifier { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
