using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ForecastExportJob;

/// <summary>
/// The inputs of the ListForecastExportJobs operation.
/// </summary>
public sealed record ListForecastExportJobsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceForecastExportJobApi XAmzTarget { get; init; }
}
