using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectCustomLabels2 operation.
/// </summary>
public sealed record DetectCustomLabels2Request
{
    public required XAmzTarget2AmazonRekognitionOperationsApi XAmzTarget { get; init; }
}
