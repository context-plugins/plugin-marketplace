using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the AssociateFaces operation.
/// </summary>
public sealed record AssociateFacesOperationRequest
{
    public required XAmzTargetAmazonRekognitionFaceApi XAmzTarget { get; init; }
}
