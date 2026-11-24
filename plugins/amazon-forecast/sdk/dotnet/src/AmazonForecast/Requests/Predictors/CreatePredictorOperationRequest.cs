using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Predictors;

/// <summary>
/// The inputs of the CreatePredictor operation.
/// </summary>
public sealed record CreatePredictorOperationRequest
{
    public required XAmzTargetAmazonForecastServicePredictorsApi XAmzTarget { get; init; }
}
