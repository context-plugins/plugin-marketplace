using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceApi;

/// <summary>
/// The inputs of the SearchFacesByImage operation.
/// </summary>
public sealed record SearchFacesByImageOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
