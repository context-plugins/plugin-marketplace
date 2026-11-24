namespace NordicFinancialNews.Requests.ArticlesApi;

/// <summary>
/// The inputs of the GetApiV1ArticlesById operation.
/// </summary>
public sealed record GetApiV1ArticlesByIdRequest
{
    /// <summary>
    /// Article ID (e.g. <c>art_abc123def</c>).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// When <c>true</c>, widen <c>companies</c> and <c>company_ids</c> back to peripheral associations (a company named only as the article's source, an advisor, or a passing mention), which are otherwise excluded. Default <c>false</c> (principal-only). Each <c>companies[]</c> entry always carries <c>association_tier</c> regardless of this parameter.
    /// </summary>
    public bool? IncludePeripheral { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if the article has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
