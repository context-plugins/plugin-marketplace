using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the StartPersonTracking operation.
/// </summary>
public sealed record StartPersonTrackingOperationRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
