using AwsXRay.Models;

namespace AwsXRay.Requests.Getsamplingrules;

/// <summary>
/// The inputs of the GetSamplingRules operation.
/// </summary>
public sealed record GetSamplingRulesOperationRequest
{
    public GetSamplingRulesRequest? Body { get; init; }
}
