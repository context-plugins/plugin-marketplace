using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorSummary
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
    /// The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetGroupArn")]
    public string? DatasetGroupArn { get; init; }

    /// <summary>
    /// Whether AutoPredictor was used to create the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsAutoPredictor")]
    public bool? IsAutoPredictor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReferencePredictorSummary")]
    public ReferencePredictorSummary? ReferencePredictorSummary { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
