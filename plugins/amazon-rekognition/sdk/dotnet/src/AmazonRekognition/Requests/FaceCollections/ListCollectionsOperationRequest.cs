using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceCollections;

/// <summary>
/// The inputs of the ListCollections operation.
/// </summary>
public sealed record ListCollectionsOperationRequest
{
    public required XAmzTarget2AmazonRekognitionFaceCollectionsApi XAmzTarget { get; init; }
}
