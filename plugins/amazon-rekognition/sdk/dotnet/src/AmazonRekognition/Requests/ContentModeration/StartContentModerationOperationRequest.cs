using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ContentModeration;

/// <summary>
/// The inputs of the StartContentModeration operation.
/// </summary>
public sealed record StartContentModerationOperationRequest
{
    public required XAmzTarget1AmazonRekognitionContentModerationApi XAmzTarget { get; init; }
}
