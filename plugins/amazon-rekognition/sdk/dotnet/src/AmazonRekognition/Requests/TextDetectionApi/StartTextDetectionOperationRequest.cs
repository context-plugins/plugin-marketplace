using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.TextDetectionApi;

/// <summary>
/// The inputs of the StartTextDetection operation.
/// </summary>
public sealed record StartTextDetectionOperationRequest
{
    public required XAmzTarget1AmazonRekognitionTextDetectionApi XAmzTarget { get; init; }
}
