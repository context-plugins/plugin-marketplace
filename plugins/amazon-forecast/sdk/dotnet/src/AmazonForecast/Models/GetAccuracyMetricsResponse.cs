using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record GetAccuracyMetricsResponse
{
    /// <summary>
    /// An array of results from evaluating the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorEvaluationResults")]
    public IReadOnlyList<EvaluationResult>? PredictorEvaluationResults { get; init; }

    /// <summary>
    /// Whether the predictor was created with CreateAutoPredictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsAutoPredictor")]
    public bool? IsAutoPredictor { get; init; }

    /// <summary>
    /// The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. The AutoML strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoMLOverrideStrategy")]
    public AutoMlOverrideStrategy? AutoMlOverrideStrategy { get; init; }

    /// <summary>
    /// The accuracy metric used to optimize the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OptimizationMetric")]
    public OptimizationMetric? OptimizationMetric { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
