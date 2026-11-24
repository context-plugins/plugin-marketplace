using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Predictors;

/// <summary>
/// The inputs of the DeletePredictor operation.
/// </summary>
public sealed record DeletePredictorOperationRequest
{
    public required XAmzTarget1AmazonForecastServicePredictorsApi XAmzTarget { get; init; }
}
