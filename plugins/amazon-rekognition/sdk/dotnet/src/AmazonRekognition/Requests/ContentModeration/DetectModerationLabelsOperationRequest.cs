using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ContentModeration;

/// <summary>
/// The inputs of the DetectModerationLabels operation.
/// </summary>
public sealed record DetectModerationLabelsOperationRequest
{
    public required XAmzTarget2AmazonRekognitionContentModerationApi XAmzTarget { get; init; }
}
