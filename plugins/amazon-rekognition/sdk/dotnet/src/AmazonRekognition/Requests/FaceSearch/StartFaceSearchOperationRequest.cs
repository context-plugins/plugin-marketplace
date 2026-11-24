using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceSearch;

/// <summary>
/// The inputs of the StartFaceSearch operation.
/// </summary>
public sealed record StartFaceSearchOperationRequest
{
    public required XAmzTarget1AmazonRekognitionFaceSearchApi XAmzTarget { get; init; }
}
