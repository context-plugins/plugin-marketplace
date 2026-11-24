using AwsXRay.Models;

namespace AwsXRay.Requests.UntagResource;

/// <summary>
/// The inputs of the UntagResourceInvoke operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public UntagResourceRequest? Body { get; init; }
}
