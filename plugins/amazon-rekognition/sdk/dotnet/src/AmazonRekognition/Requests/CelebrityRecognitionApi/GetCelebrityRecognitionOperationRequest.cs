using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.CelebrityRecognitionApi;

/// <summary>
/// The inputs of the GetCelebrityRecognition operation.
/// </summary>
public sealed record GetCelebrityRecognitionOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
