using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Predictors;

/// <summary>
/// The inputs of the DescribePredictor operation.
/// </summary>
public sealed record DescribePredictorOperationRequest
{
    public required XAmzTarget2AmazonForecastServicePredictorsApi XAmzTarget { get; init; }
}
