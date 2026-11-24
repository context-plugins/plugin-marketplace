using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectEntities operation.
/// </summary>
public sealed record BatchDetectEntitiesOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
