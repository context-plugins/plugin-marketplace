using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Times when the monitor runs. Must contain between 1 and 24 intervals.
/// </summary>
public record ScheduleInterval
{
    /// <summary>
    /// Hour when the monitor runs, from 0 through 23.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hour")]
    [Minimum(0)]
    [Maximum(23)]
    public int? Hour { get; init; }

    /// <summary>
    /// Minute when the monitor runs, from 0 through 59.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minute")]
    [Minimum(0)]
    [Maximum(59)]
    public int? Minute { get; init; }

    /// <summary>
    /// Days when a WEEKLY schedule runs. Requires 1 through 7 values from MONDAY through SUNDAY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("days")]
    [MinLength(1)]
    [MaxLength(7)]
    [UniqueItems]
    public IReadOnlyList<Day>? Days { get; init; }

    /// <summary>
    /// Days of the month when a MONTHLY schedule runs. Required for MONTHLY schedules; each value must be from 1 through 31.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysOfMonth")]
    [MinLength(0)]
    [MaxLength(31)]
    [UniqueItems]
    public IReadOnlyList<int>? DaysOfMonth { get; init; }

    /// <summary>
    /// Schedule recurrence type. Accepts WEEKLY or MONTHLY and defaults to WEEKLY.
    /// </summary>
    [JsonPropertyName("scheduleType")]
    public required ScheduleType ScheduleType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
