using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Forecasts;

/// <summary>
/// The inputs of the DescribeForecast operation.
/// </summary>
public sealed record DescribeForecastOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceForecastsApi XAmzTarget { get; init; }
}
