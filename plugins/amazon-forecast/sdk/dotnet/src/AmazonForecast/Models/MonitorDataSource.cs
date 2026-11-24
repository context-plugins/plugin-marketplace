using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record MonitorDataSource
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DatasetImportJobArn")]
    public string? DatasetImportJobArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastArn")]
    public string? ForecastArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the predictor resource you are monitoring.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorArn")]
    public string? PredictorArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
