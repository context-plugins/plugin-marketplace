using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ForecastExportJob;

/// <summary>
/// The inputs of the DescribeForecastExportJob operation.
/// </summary>
public sealed record DescribeForecastExportJobOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceForecastExportJobApi XAmzTarget { get; init; }
}
