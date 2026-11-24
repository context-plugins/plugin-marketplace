using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreatePredictorBacktestExportJobResponse
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the predictor backtest export job that you want to export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorBacktestExportJobArn")]
    public string? PredictorBacktestExportJobArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
