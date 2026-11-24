using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Forecasts;

/// <summary>
/// The inputs of the DeleteForecast operation.
/// </summary>
public sealed record DeleteForecastOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceForecastsApi XAmzTarget { get; init; }
}
