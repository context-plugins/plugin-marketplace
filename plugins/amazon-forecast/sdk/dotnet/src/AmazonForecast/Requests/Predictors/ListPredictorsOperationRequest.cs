using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Predictors;

/// <summary>
/// The inputs of the ListPredictors operation.
/// </summary>
public sealed record ListPredictorsOperationRequest
{
    public required XAmzTarget3AmazonForecastServicePredictorsApi XAmzTarget { get; init; }
}
