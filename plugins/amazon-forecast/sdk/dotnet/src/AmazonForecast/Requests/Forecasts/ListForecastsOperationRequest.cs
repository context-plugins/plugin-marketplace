using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Forecasts;

/// <summary>
/// The inputs of the ListForecasts operation.
/// </summary>
public sealed record ListForecastsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceForecastsApi XAmzTarget { get; init; }
}
