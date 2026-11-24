using AwsXRay.Models;

namespace AwsXRay.Requests.Insightsummaries;

/// <summary>
/// The inputs of the GetInsightSummaries operation.
/// </summary>
public sealed record GetInsightSummariesRequest
{
    public InsightSummariesRequest? Body { get; init; }
}
