using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.PredictorBacktestExportJob;

/// <summary>
/// The inputs of the CreatePredictorBacktestExportJob operation.
/// </summary>
public sealed record CreatePredictorBacktestExportJobOperationRequest
{
    public required XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi XAmzTarget { get; init; }
}
