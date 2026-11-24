using AwsXRay.Models;

namespace AwsXRay.Requests.Samplingtargets;

/// <summary>
/// The inputs of the GetSamplingTargets operation.
/// </summary>
public sealed record GetSamplingTargetsRequest
{
    public SamplingTargetsRequest? Body { get; init; }
}
