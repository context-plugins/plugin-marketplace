using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.TextDetectionApi;

/// <summary>
/// The inputs of the GetTextDetection operation.
/// </summary>
public sealed record GetTextDetectionOperationRequest
{
    public required XAmzTargetAmazonRekognitionTextDetectionApi XAmzTarget { get; init; }
}
