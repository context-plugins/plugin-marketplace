using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the DeleteFaces operation.
/// </summary>
public sealed record DeleteFacesOperationRequest
{
    public required XAmzTarget1AmazonRekognitionFaceApi XAmzTarget { get; init; }
}
