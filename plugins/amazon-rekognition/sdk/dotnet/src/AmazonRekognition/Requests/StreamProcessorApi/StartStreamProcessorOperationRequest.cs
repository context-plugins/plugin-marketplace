using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the StartStreamProcessor operation.
/// </summary>
public sealed record StartStreamProcessorOperationRequest
{
    public required XAmzTarget4AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
