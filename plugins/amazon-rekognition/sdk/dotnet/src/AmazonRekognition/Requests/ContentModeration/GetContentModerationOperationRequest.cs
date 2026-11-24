using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ContentModeration;

/// <summary>
/// The inputs of the GetContentModeration operation.
/// </summary>
public sealed record GetContentModerationOperationRequest
{
    public required XAmzTargetAmazonRekognitionContentModerationApi XAmzTarget { get; init; }
}
