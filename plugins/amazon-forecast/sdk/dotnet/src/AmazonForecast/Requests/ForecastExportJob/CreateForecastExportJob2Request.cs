using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ForecastExportJob;

/// <summary>
/// The inputs of the CreateForecastExportJob2 operation.
/// </summary>
public sealed record CreateForecastExportJob2Request
{
    public required XAmzTargetAmazonForecastServiceExportJobsApi XAmzTarget { get; init; }
}
