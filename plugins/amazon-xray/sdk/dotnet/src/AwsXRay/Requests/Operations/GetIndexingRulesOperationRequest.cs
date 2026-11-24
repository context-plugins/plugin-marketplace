using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the GetIndexingRules operation.
/// </summary>
public sealed record GetIndexingRulesOperationRequest
{
    public GetIndexingRulesRequest? Body { get; init; }
}
