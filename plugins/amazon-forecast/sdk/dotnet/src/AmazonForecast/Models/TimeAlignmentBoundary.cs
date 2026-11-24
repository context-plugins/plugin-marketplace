using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record TimeAlignmentBoundary
{
    /// <summary>
    /// The month to use for time alignment during aggregation. The month must be in uppercase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Month")]
    public Month? Month { get; init; }

    /// <summary>
    /// The day of the month to use for time alignment during aggregation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DayOfMonth")]
    public int? DayOfMonth { get; init; }

    /// <summary>
    /// The day of week to use for time alignment during aggregation. The day must be in uppercase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DayOfWeek")]
    public DayOfWeekEnum? DayOfWeek { get; init; }

    /// <summary>
    /// The hour of day to use for time alignment during aggregation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Hour")]
    public int? Hour { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
