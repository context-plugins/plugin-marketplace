using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the GetFaceDetection operation.
/// </summary>
public sealed record GetFaceDetectionOperationRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
