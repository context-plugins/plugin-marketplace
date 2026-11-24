using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record WindowSummary
{
    /// <summary>
    /// The timestamp that defines the start of the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindowStart")]
    public DateTimeOffset? TestWindowStart { get; init; }

    /// <summary>
    /// The timestamp that defines the end of the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindowEnd")]
    public DateTimeOffset? TestWindowEnd { get; init; }

    /// <summary>
    /// The number of data points within the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ItemCount")]
    public int? ItemCount { get; init; }

    /// <summary>
    /// The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The metrics for the specified window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationType")]
    public EvaluationType? EvaluationType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Metrics")]
    public Metrics? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
