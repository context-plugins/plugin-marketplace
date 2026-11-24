using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the DeleteStreamProcessor operation.
/// </summary>
public sealed record DeleteStreamProcessorOperationRequest
{
    public required XAmzTarget1AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
