using AwsXRay.Models;

namespace AwsXRay.Requests.InsightApi;

/// <summary>
/// The inputs of the GetInsight operation.
/// </summary>
public sealed record GetInsightRequest
{
    public InsightRequest? Body { get; init; }
}
