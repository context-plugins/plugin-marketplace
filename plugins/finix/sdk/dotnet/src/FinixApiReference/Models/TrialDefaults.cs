using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing default trial settings.
/// </summary>
public record TrialDefaults
{
    /// <summary>
    /// The unit of time for the trial period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interval_type")]
    public IntervalType? IntervalType { get; init; }

    /// <summary>
    /// The number of intervals of <c>interval_type</c> used to describe the duration of the trial.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interval_count")]
    public int? IntervalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
