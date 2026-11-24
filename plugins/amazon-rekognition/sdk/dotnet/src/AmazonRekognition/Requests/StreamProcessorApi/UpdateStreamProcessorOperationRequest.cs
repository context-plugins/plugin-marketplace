using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the UpdateStreamProcessor operation.
/// </summary>
public sealed record UpdateStreamProcessorOperationRequest
{
    public required XAmzTarget6AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
