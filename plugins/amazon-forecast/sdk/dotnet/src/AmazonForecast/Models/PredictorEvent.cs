using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorEvent
{
    /// <summary>
    /// The type of event. For example, Retrain. A retraining event denotes the timepoint when a predictor was retrained. Any monitor results from before the Datetime are from the previous predictor. Any new metrics are for the newly retrained predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// The timestamp for when the event occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Datetime")]
    public DateTimeOffset? Datetime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
