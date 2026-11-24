using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetImportJob;

/// <summary>
/// The inputs of the ListDatasetImportJobs operation.
/// </summary>
public sealed record ListDatasetImportJobsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceDatasetImportJobApi XAmzTarget { get; init; }
}
