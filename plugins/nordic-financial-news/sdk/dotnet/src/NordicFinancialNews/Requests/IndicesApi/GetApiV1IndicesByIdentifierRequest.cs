namespace NordicFinancialNews.Requests.IndicesApi;

/// <summary>
/// The inputs of the GetApiV1IndicesByIdentifier operation.
/// </summary>
public sealed record GetApiV1IndicesByIdentifierRequest
{
    /// <summary>
    /// Index ID or symbol (e.g. <c>OMXS30</c>)
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
