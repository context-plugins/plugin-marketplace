using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetImportJob;

/// <summary>
/// The inputs of the DescribeDatasetImportJob operation.
/// </summary>
public sealed record DescribeDatasetImportJobOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceDatasetImportJobApi XAmzTarget { get; init; }
}
