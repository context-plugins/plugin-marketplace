using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ContainsPiiEntities operation.
/// </summary>
public sealed record ContainsPiiEntitiesOperationRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
