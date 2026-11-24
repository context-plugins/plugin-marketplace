using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DescribeCollection operation.
/// </summary>
public sealed record DescribeCollectionOperationRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
