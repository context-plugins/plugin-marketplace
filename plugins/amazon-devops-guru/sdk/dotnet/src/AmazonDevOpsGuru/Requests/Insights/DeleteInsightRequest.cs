namespace AmazonDevOpsGuru.Requests.Insights;

/// <summary>
/// The inputs of the DeleteInsight operation.
/// </summary>
public sealed record DeleteInsightRequest
{
    /// <summary>
    /// The ID of the insight.
    /// </summary>
    public required string Id { get; init; }
}
