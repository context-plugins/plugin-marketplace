using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the StartSegmentDetection operation.
/// </summary>
public sealed record StartSegmentDetectionOperationRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
