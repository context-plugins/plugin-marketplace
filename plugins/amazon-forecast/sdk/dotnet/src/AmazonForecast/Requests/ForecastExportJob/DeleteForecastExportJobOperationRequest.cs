using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ForecastExportJob;

/// <summary>
/// The inputs of the DeleteForecastExportJob operation.
/// </summary>
public sealed record DeleteForecastExportJobOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceForecastExportJobApi XAmzTarget { get; init; }
}
