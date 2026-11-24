using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Dataset;

/// <summary>
/// The inputs of the CreateDataset operation.
/// </summary>
public sealed record CreateDatasetOperationRequest
{
    public required XAmzTargetAmazonRekognitionDatasetApi XAmzTarget { get; init; }
}
