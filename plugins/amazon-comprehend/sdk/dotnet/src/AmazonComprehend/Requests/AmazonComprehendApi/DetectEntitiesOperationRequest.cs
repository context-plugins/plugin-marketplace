using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectEntities operation.
/// </summary>
public sealed record DetectEntitiesOperationRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
