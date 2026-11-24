using AwsXRay.Models;

namespace AwsXRay.Requests.Putresourcepolicy;

/// <summary>
/// The inputs of the PutResourcePolicy operation.
/// </summary>
public sealed record PutResourcePolicyOperationRequest
{
    public PutResourcePolicyRequest? Body { get; init; }
}
