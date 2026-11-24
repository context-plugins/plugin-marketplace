using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.CelebrityRecognitionApi;

/// <summary>
/// The inputs of the StartCelebrityRecognition operation.
/// </summary>
public sealed record StartCelebrityRecognitionOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
