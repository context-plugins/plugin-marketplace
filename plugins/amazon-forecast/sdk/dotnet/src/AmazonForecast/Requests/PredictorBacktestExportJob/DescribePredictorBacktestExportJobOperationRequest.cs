using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.PredictorBacktestExportJob;

/// <summary>
/// The inputs of the DescribePredictorBacktestExportJob operation.
/// </summary>
public sealed record DescribePredictorBacktestExportJobOperationRequest
{
    public required XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi XAmzTarget { get; init; }
}
