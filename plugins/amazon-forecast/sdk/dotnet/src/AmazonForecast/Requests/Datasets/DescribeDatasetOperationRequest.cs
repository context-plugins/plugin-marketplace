using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Datasets;

/// <summary>
/// The inputs of the DescribeDataset operation.
/// </summary>
public sealed record DescribeDatasetOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceDatasetsApi XAmzTarget { get; init; }
}
