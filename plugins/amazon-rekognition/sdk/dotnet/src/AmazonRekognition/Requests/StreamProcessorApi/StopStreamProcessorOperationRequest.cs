using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the StopStreamProcessor operation.
/// </summary>
public sealed record StopStreamProcessorOperationRequest
{
    public required XAmzTarget5AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
