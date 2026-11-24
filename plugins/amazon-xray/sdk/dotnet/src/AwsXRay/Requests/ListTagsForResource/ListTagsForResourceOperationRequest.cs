using AwsXRay.Models;

namespace AwsXRay.Requests.ListTagsForResource;

/// <summary>
/// The inputs of the ListTagsForResourceInvoke operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public ListTagsForResourceRequest? Body { get; init; }
}
