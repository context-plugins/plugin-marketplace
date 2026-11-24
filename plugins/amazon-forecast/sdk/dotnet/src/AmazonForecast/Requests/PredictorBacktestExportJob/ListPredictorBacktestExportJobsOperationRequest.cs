using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.PredictorBacktestExportJob;

/// <summary>
/// The inputs of the ListPredictorBacktestExportJobs operation.
/// </summary>
public sealed record ListPredictorBacktestExportJobsOperationRequest
{
    public required XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi XAmzTarget { get; init; }
}
