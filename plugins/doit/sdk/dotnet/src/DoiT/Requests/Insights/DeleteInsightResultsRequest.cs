namespace DoiT.Requests.Insights;

/// <summary>
/// The inputs of the DeleteInsightResults operation.
/// </summary>
public sealed record DeleteInsightResultsRequest
{
    /// <summary>
    /// The unique key identifying the insight to delete.
    /// </summary>
    public required string InsightKey { get; init; }
}
