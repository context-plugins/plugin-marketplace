namespace NordicFinancialNews.Requests.ExchangesApi;

/// <summary>
/// The inputs of the GetApiV1Exchanges operation.
/// </summary>
public sealed record GetApiV1ExchangesRequest
{
    /// <summary>
    /// Number of exchanges to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor from a previous response.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. <c>SE,NO</c>). Case-insensitive.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Available fields: <c>id</c>, <c>name</c>, <c>mic_code</c>, <c>acronym</c>, <c>country</c>.
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
