using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Forecasts;

/// <summary>
/// The inputs of the CreateForecast operation.
/// </summary>
public sealed record CreateForecastOperationRequest
{
    public required XAmzTargetAmazonForecastServiceForecastsApi XAmzTarget { get; init; }
}
