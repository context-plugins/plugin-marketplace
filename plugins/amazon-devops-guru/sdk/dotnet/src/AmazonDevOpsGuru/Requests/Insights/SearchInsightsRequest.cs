using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Insights;

/// <summary>
/// The inputs of the SearchInsights operation.
/// </summary>
public sealed record SearchInsightsRequest
{
    public InsightsSearchRequest? Body { get; init; }
}
