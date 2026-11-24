using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the CreateStreamProcessor operation.
/// </summary>
public sealed record CreateStreamProcessorOperationRequest
{
    public required XAmzTargetAmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
