using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Recurring processing schedule configured for the monitor.
/// </summary>
public record SignalSchedulePolicy
{
    /// <summary>
    /// Times when the monitor runs. Must contain between 1 and 24 intervals.
    /// </summary>
    [JsonPropertyName("intervals")]
    [MinLength(1)]
    [MaxLength(24)]
    public required IReadOnlyList<ScheduleInterval> Intervals { get; init; }

    /// <summary>
    /// IANA time zone used to interpret schedule intervals, such as America/Chicago. Defaults to UTC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezoneId")]
    public string? TimezoneId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
