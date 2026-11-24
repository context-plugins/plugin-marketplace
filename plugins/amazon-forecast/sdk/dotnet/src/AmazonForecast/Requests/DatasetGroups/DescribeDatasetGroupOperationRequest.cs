using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetGroups;

/// <summary>
/// The inputs of the DescribeDatasetGroup operation.
/// </summary>
public sealed record DescribeDatasetGroupOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
