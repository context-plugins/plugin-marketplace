using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the UpdateIndexingRule operation.
/// </summary>
public sealed record UpdateIndexingRuleOperationRequest
{
    public UpdateIndexingRuleRequest? Body { get; init; }
}
