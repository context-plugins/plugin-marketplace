using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.CelebrityRecognitionApi;

/// <summary>
/// The inputs of the RecognizeCelebrities operation.
/// </summary>
public sealed record RecognizeCelebritiesOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
