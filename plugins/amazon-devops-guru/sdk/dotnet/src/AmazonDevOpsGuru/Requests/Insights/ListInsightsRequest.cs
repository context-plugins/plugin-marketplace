using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Insights;

/// <summary>
/// The inputs of the ListInsights operation.
/// </summary>
public sealed record ListInsightsRequest
{
    public InsightsRequest? Body { get; init; }
}
