using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectLabels2 operation.
/// </summary>
public sealed record DetectLabels2Request
{
    public required XAmzTarget4AmazonRekognitionOperationsApi XAmzTarget { get; init; }
}
