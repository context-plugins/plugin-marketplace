using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.CostEstimation;

/// <summary>
/// The inputs of the StartCostEstimation operation.
/// </summary>
public sealed record StartCostEstimationRequest
{
    public CostEstimationRequest? Body { get; init; }
}
