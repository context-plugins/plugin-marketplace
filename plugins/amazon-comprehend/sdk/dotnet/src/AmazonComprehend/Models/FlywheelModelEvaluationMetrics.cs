using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record FlywheelModelEvaluationMetrics
{
    /// <summary>
    /// The average F1 score from the evaluation metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageF1Score")]
    public double? AverageF1Score { get; init; }

    /// <summary>
    /// Average precision metric for the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AveragePrecision")]
    public double? AveragePrecision { get; init; }

    /// <summary>
    /// Average recall metric for the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageRecall")]
    public double? AverageRecall { get; init; }

    /// <summary>
    /// Average accuracy metric for the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageAccuracy")]
    public double? AverageAccuracy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
