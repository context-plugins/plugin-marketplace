using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ExportJobs;

/// <summary>
/// The inputs of the CreateForecastExportJob operation.
/// </summary>
public sealed record CreateForecastExportJobOperationRequest
{
    public required XAmzTargetAmazonForecastServiceExportJobsApi XAmzTarget { get; init; }
}
