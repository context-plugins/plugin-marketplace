using AwsXRay.Models;

namespace AwsXRay.Requests.Insightimpactgraph;

/// <summary>
/// The inputs of the GetInsightImpactGraph operation.
/// </summary>
public sealed record GetInsightImpactGraphRequest
{
    public InsightImpactGraphRequest? Body { get; init; }
}
