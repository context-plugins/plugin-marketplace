using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Dataset;

/// <summary>
/// The inputs of the DeleteDataset operation.
/// </summary>
public sealed record DeleteDatasetOperationRequest
{
    public required XAmzTarget1AmazonRekognitionDatasetApi XAmzTarget { get; init; }
}
