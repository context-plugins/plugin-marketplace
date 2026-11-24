using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the GetSegmentDetection operation.
/// </summary>
public sealed record GetSegmentDetectionOperationRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
