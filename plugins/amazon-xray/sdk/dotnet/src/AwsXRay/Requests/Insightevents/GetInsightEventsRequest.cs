using AwsXRay.Models;

namespace AwsXRay.Requests.Insightevents;

/// <summary>
/// The inputs of the GetInsightEvents operation.
/// </summary>
public sealed record GetInsightEventsRequest
{
    public InsightEventsRequest? Body { get; init; }
}
