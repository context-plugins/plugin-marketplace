using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Dataset;

/// <summary>
/// The inputs of the DescribeDataset operation.
/// </summary>
public sealed record DescribeDatasetOperationRequest
{
    public required XAmzTarget2AmazonRekognitionDatasetApi XAmzTarget { get; init; }
}
