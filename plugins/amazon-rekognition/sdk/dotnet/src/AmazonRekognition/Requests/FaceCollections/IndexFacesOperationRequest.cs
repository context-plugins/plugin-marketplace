using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceCollections;

/// <summary>
/// The inputs of the IndexFaces operation.
/// </summary>
public sealed record IndexFacesOperationRequest
{
    public required XAmzTargetAmazonRekognitionFaceCollectionsApi XAmzTarget { get; init; }
}
