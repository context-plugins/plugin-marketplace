using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the DescribeStreamProcessor operation.
/// </summary>
public sealed record DescribeStreamProcessorOperationRequest
{
    public required XAmzTarget2AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
