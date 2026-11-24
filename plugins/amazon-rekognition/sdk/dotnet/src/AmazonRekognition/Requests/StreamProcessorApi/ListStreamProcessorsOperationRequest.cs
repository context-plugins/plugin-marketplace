using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.StreamProcessorApi;

/// <summary>
/// The inputs of the ListStreamProcessors operation.
/// </summary>
public sealed record ListStreamProcessorsOperationRequest
{
    public required XAmzTarget3AmazonRekognitionStreamProcessorApi XAmzTarget { get; init; }
}
