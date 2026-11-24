using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceCollections;

/// <summary>
/// The inputs of the CreateCollection operation.
/// </summary>
public sealed record CreateCollectionOperationRequest
{
    public required XAmzTarget1AmazonRekognitionFaceCollectionsApi XAmzTarget { get; init; }
}
