using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing trial details.
/// </summary>
public record TrialDetails
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

    /// <summary>
    /// A timestamp indicating when the trial period began.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_started_at")]
    public DateTimeOffset? TrialStartedAt { get; init; }

    /// <summary>
    /// A timestamp indicating when the trial period is expected to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_expected_start_at")]
    public DateTimeOffset? TrialExpectedStartAt { get; init; }

    /// <summary>
    /// A timestamp indicating when the trial period ends.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_expected_end_at")]
    public DateTimeOffset? TrialExpectedEndAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
