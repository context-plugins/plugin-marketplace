using AwsXRay.Models;

namespace AwsXRay.Requests.Listresourcepolicies;

/// <summary>
/// The inputs of the ListResourcePolicies operation.
/// </summary>
public sealed record ListResourcePoliciesOperationRequest
{
    public ListResourcePoliciesRequest? Body { get; init; }
}
