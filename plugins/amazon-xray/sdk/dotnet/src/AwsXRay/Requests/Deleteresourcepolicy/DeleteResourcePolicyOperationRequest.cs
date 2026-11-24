using AwsXRay.Models;

namespace AwsXRay.Requests.Deleteresourcepolicy;

/// <summary>
/// The inputs of the DeleteResourcePolicy operation.
/// </summary>
public sealed record DeleteResourcePolicyOperationRequest
{
    public DeleteResourcePolicyRequest? Body { get; init; }
}
