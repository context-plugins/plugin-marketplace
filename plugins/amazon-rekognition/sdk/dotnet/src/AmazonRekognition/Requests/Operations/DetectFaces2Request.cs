using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectFaces2 operation.
/// </summary>
public sealed record DetectFaces2Request
{
    public required XAmzTarget3AmazonRekognitionOperationsApi XAmzTarget { get; init; }
}
