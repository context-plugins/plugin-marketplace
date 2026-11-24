using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectModerationLabels2 operation.
/// </summary>
public sealed record DetectModerationLabels2Request
{
    public required XAmzTarget5AmazonRekognitionOperationsApi XAmzTarget { get; init; }
}
