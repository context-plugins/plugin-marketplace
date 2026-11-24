using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.FaceSearch;

/// <summary>
/// The inputs of the SearchFacesByImage2 operation.
/// </summary>
public sealed record SearchFacesByImage2Request
{
    public required XAmzTarget2AmazonRekognitionFaceSearchApi XAmzTarget { get; init; }
}
