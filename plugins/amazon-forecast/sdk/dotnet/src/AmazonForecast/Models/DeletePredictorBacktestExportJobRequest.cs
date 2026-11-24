using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeletePredictorBacktestExportJobRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the predictor backtest export job to delete.
    /// </summary>
    [JsonPropertyName("PredictorBacktestExportJobArn")]
    public required string PredictorBacktestExportJobArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
