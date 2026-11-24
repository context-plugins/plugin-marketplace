namespace Audioscrape.Requests.KnowledgeGraph;

/// <summary>
/// The inputs of the GetEntity operation.
/// </summary>
public sealed record GetEntityRequest
{
    /// <summary>
    /// URL slug from entity search results
    /// </summary>
    public required string EntitySlug { get; init; }

    /// <summary>
    /// Only count/list episodes from this dataset. The dataset must be in your visible scope; otherwise 404.
    /// </summary>
    public long? DatasetId { get; init; }
}
