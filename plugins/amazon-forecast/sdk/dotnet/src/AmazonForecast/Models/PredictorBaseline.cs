using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorBaseline
{
    /// <summary>
    /// The initial accuracy metrics for the predictor. Use these metrics as a baseline for comparison purposes as you use your predictor and the metrics change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BaselineMetrics")]
    public IReadOnlyList<BaselineMetric>? BaselineMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
