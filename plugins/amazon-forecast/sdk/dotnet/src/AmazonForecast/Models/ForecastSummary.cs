using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ForecastSummary
{
    /// <summary>
    /// The ARN of the forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastArn")]
    public string? ForecastArn { get; init; }

    /// <summary>
    /// The name of the forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastName")]
    public string? ForecastName { get; init; }

    /// <summary>
    /// The ARN of the predictor used to generate the forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorArn")]
    public string? PredictorArn { get; init; }

    /// <summary>
    /// Whether the Forecast was created from an AutoPredictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedUsingAutoPredictor")]
    public bool? CreatedUsingAutoPredictor { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetGroupArn")]
    public string? DatasetGroupArn { get; init; }

    /// <summary>
    /// The status of the forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast must be ACTIVE before you can query or export the forecast.
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
    /// When the forecast creation task was created.
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
