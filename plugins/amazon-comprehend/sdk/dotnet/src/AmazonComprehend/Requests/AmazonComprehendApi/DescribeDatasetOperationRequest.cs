using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeDataset operation.
/// </summary>
public sealed record DescribeDatasetOperationRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
