using AwsXRay.Models;

namespace AwsXRay.Requests.Deletesamplingrule;

/// <summary>
/// The inputs of the DeleteSamplingRule operation.
/// </summary>
public sealed record DeleteSamplingRuleOperationRequest
{
    public DeleteSamplingRuleRequest? Body { get; init; }
}
