using AwsXRay.Models;

namespace AwsXRay.Requests.Updatesamplingrule;

/// <summary>
/// The inputs of the UpdateSamplingRule operation.
/// </summary>
public sealed record UpdateSamplingRuleOperationRequest
{
    public UpdateSamplingRuleRequest? Body { get; init; }
}
