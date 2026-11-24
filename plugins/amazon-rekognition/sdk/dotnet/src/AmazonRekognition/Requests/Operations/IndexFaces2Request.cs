using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the IndexFaces2 operation.
/// </summary>
public sealed record IndexFaces2Request
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
