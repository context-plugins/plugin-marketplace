using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the DisassociateFaces operation.
/// </summary>
public sealed record DisassociateFacesOperationRequest
{
    public required XAmzTarget2AmazonRekognitionFaceApi XAmzTarget { get; init; }
}
