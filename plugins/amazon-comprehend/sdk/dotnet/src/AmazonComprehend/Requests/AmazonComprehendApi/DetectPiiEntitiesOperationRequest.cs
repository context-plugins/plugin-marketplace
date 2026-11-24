using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectPiiEntities operation.
/// </summary>
public sealed record DetectPiiEntitiesOperationRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
