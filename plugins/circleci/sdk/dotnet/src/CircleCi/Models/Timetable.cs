using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation.Attributes;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record Timetable
{
    /// <summary>
    /// Number of times per hour to trigger
    /// </summary>
    [JsonPropertyName("per-hour")]
    [Minimum(1)]
    [Maximum(60)]
    public required int PerHour { get; init; }

    /// <summary>
    /// Hours of the day to trigger (UTC)
    /// </summary>
    [JsonPropertyName("hours-of-day")]
    public required IReadOnlyList<int> HoursOfDay { get; init; }

    /// <summary>
    /// Days of the week to trigger
    /// </summary>
    [JsonPropertyName("days-of-week")]
    public required IReadOnlyList<DaysOfWeek> DaysOfWeek { get; init; }

    /// <summary>
    /// Days of the month to trigger
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("days-of-month")]
    public IReadOnlyList<int>? DaysOfMonth { get; init; }

    /// <summary>
    /// Months to trigger
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("months")]
    public IReadOnlyList<Month>? Months { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
