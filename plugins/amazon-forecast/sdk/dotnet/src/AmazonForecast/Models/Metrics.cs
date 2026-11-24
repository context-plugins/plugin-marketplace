using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record Metrics
{
    /// <summary>
    /// The root-mean-square error (RMSE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RMSE")]
    public double? Rmse { get; init; }

    /// <summary>
    /// An array of weighted quantile losses. Quantiles divide a probability distribution into regions of equal probability. The distribution in this case is the loss function.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WeightedQuantileLosses")]
    public IReadOnlyList<WeightedQuantileLoss>? WeightedQuantileLosses { get; init; }

    /// <summary>
    /// Provides detailed error metrics for each forecast type. Metrics include root-mean square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE), and weighted average percentage error (WAPE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ErrorMetrics")]
    public IReadOnlyList<ErrorMetric>? ErrorMetrics { get; init; }

    /// <summary>
    /// The average value of all weighted quantile losses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageWeightedQuantileLoss")]
    public double? AverageWeightedQuantileLoss { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
