namespace Audioscrape.Requests.KnowledgeGraph;

/// <summary>
/// The inputs of the SearchEntities operation.
/// </summary>
public sealed record SearchEntitiesRequest
{
    /// <summary>
    /// Name prefix to search for
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Filter by entity type (e.g. <c>person</c>, <c>organization</c>, <c>place</c>)
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Max results (default 20, max 50)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// Only entities mentioned in this dataset. The dataset must be in your visible scope (public, or in a workspace you belong to); otherwise 404.
    /// </summary>
    public long? DatasetId { get; init; }
}
