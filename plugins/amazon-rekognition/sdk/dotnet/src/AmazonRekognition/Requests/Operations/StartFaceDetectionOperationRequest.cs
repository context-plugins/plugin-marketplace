using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the StartFaceDetection operation.
/// </summary>
public sealed record StartFaceDetectionOperationRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
