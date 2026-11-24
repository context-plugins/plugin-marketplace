using AwsXRay.Models;

namespace AwsXRay.Requests.Sampling;

/// <summary>
/// The inputs of the GetSamplingRules2 operation.
/// </summary>
public sealed record GetSamplingRules2Request
{
    public GetSamplingRulesRequest? Body { get; init; }
}
