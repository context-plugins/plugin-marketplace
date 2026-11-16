using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing default trial settings.
/// </summary>
public record TrialDefaults1
{
    /// <summary>
    /// The number of intervals of <c>interval_type</c> used to describe the duration of the trial.
    /// </summary>
    [JsonPropertyName("interval_count")]
    public required int IntervalCount { get; init; }

    /// <summary>
    /// The unit of time for the trial period.
    /// </summary>
    [JsonPropertyName("interval_type")]
    public required IntervalType IntervalType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
