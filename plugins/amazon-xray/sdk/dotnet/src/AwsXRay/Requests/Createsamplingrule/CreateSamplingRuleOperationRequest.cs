using AwsXRay.Models;

namespace AwsXRay.Requests.Createsamplingrule;

/// <summary>
/// The inputs of the CreateSamplingRule operation.
/// </summary>
public sealed record CreateSamplingRuleOperationRequest
{
    public CreateSamplingRuleRequest? Body { get; init; }
}
