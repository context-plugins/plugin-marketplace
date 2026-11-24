using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record DescribePredictorResponse
{
    /// <summary>
    /// The ARN of the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorArn")]
    public string? PredictorArn { get; init; }

    /// <summary>
    /// The name of the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorName")]
    public string? PredictorName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the algorithm used for model training.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AlgorithmArn")]
    public string? AlgorithmArn { get; init; }

    /// <summary>
    /// When PerformAutoML is specified, the ARN of the chosen algorithm.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoMLAlgorithmArns")]
    public IReadOnlyList<string>? AutoMlAlgorithmArns { get; init; }

    /// <summary>
    /// The number of time-steps of the forecast. The forecast horizon is also called the prediction length.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastHorizon")]
    public int? ForecastHorizon { get; init; }

    /// <summary>
    /// The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastTypes")]
    public IReadOnlyList<string>? ForecastTypes { get; init; }

    /// <summary>
    /// Whether the predictor is set to perform AutoML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PerformAutoML")]
    public bool? PerformAutoMl { get; init; }

    /// <summary>
    /// The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges. The AutoML strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutoMLOverrideStrategy")]
    public AutoMlOverrideStrategy? AutoMlOverrideStrategy { get; init; }

    /// <summary>
    /// Whether the predictor is set to perform hyperparameter optimization (HPO).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PerformHPO")]
    public bool? PerformHpo { get; init; }

    /// <summary>
    /// The default training parameters or overrides selected during model training. When running AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen hyperparameters are returned. For more information, see aws-forecast-choosing-recipes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainingParameters")]
    public IReadOnlyDictionary<string, string>? TrainingParameters { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationParameters")]
    public EvaluationParameters? EvaluationParameters { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HPOConfig")]
    public HyperParameterTuningJobConfig? HpoConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputDataConfig")]
    public InputDataConfig? InputDataConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeaturizationConfig")]
    public FeaturizationConfig? FeaturizationConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfig")]
    public EncryptionConfig? EncryptionConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorExecutionDetails")]
    public PredictorExecutionDetails? PredictorExecutionDetails { get; init; }

    /// <summary>
    /// The estimated time remaining in minutes for the predictor training job to complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EstimatedTimeRemainingInMinutes")]
    public int? EstimatedTimeRemainingInMinutes { get; init; }

    /// <summary>
    /// Whether the predictor was created with CreateAutoPredictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsAutoPredictor")]
    public bool? IsAutoPredictor { get; init; }

    /// <summary>
    /// An array of the ARNs of the dataset import jobs used to import training data for the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetImportJobArns")]
    public IReadOnlyList<string>? DatasetImportJobArns { get; init; }

    /// <summary>
    /// The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED The Status of the predictor must be ACTIVE before you can use the predictor to create a forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// If an error occurred, an informational message about the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// When the model training task was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    /// <summary>
    /// The accuracy metric used to optimize the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OptimizationMetric")]
    public OptimizationMetric? OptimizationMetric { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
