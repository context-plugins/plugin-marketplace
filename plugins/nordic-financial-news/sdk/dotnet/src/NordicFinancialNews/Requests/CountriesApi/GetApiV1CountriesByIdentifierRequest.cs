namespace NordicFinancialNews.Requests.CountriesApi;

/// <summary>
/// The inputs of the GetApiV1CountriesByIdentifier operation.
/// </summary>
public sealed record GetApiV1CountriesByIdentifierRequest
{
    /// <summary>
    /// Country ID, ISO 3166-1 alpha-2 code (e.g. <c>SE</c>), or slug (e.g. <c>sweden</c>)
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
