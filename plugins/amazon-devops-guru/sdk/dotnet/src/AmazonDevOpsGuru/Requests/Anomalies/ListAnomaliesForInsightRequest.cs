using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Anomalies;

/// <summary>
/// The inputs of the ListAnomaliesForInsight operation.
/// </summary>
public sealed record ListAnomaliesForInsightRequest
{
    /// <summary>
    /// The ID of the insight. The returned anomalies belong to this insight.
    /// </summary>
    public required string InsightId { get; init; }

    public AnomaliesInsightRequest? Body { get; init; }
}
