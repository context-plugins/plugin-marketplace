using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the ListFaces operation.
/// </summary>
public sealed record ListFacesOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
