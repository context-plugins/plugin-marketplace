using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public required XAmzTarget79 XAmzTarget { get; init; }
}
