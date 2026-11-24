using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the ListDatasetLabels operation.
/// </summary>
public sealed record ListDatasetLabelsOperationRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
