using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.PredictorBacktestExportJob;

/// <summary>
/// The inputs of the DeletePredictorBacktestExportJob operation.
/// </summary>
public sealed record DeletePredictorBacktestExportJobOperationRequest
{
    public required XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi XAmzTarget { get; init; }
}
