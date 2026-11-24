using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.TextDetectionApi;

/// <summary>
/// The inputs of the DetectText2 operation.
/// </summary>
public sealed record DetectText2Request
{
    public required XAmzTarget2AmazonRekognitionTextDetectionApi XAmzTarget { get; init; }
}
