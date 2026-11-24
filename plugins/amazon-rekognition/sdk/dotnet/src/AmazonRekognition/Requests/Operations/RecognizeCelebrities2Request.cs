using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the RecognizeCelebrities2 operation.
/// </summary>
public sealed record RecognizeCelebrities2Request
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
