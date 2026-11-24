using AwsXRay.Models;

namespace AwsXRay.Requests.TagResource;

/// <summary>
/// The inputs of the TagResourceInvoke operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public TagResourceRequest? Body { get; init; }
}
