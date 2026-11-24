using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the GetPersonTracking operation.
/// </summary>
public sealed record GetPersonTrackingOperationRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
