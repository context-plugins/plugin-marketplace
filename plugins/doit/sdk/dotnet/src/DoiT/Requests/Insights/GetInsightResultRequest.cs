namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the GetInsightResult operation.
/// </summary>
public sealed record GetInsightResultRequest
{
    /// <summary>
    /// The identifier of the source that generated the insight.
    /// </summary>
    public required string SourceId { get; init; }

    /// <summary>
    /// The unique key identifying the insight.
    /// </summary>
    public required string InsightKey { get; init; }
}
