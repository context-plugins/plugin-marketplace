using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceSearch;

/// <summary>
/// The inputs of the GetFaceSearch operation.
/// </summary>
public sealed record GetFaceSearchOperationRequest
{
    public required XAmzTargetAmazonRekognitionFaceSearchApi XAmzTarget { get; init; }
}
