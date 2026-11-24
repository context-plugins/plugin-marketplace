using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the SearchFaces operation.
/// </summary>
public sealed record SearchFacesOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
