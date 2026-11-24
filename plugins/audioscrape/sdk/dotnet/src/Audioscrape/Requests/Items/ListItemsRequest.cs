namespace Audioscrape.Requests.Items;

/// <summary>
/// The inputs of the ListItems operation.
/// </summary>
public sealed record ListItemsRequest
{
    /// <summary>
    /// Filter by source type (<c>podcast_episode</c>, <c>upload</c>, <c>youtube</c>, ...). Omit for all types.
    /// </summary>
    public string? SourceType { get; init; }

    /// <summary>
    /// Restrict to items in a specific dataset
    /// </summary>
    public long? DatasetId { get; init; }

    /// <summary>
    /// Restrict to items in a specific library (by slug)
    /// </summary>
    public string? Library { get; init; }

    /// <summary>
    /// Max results (default 20, max 100)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// Result offset for pagination
    /// </summary>
    public long? Offset { get; init; }
}
