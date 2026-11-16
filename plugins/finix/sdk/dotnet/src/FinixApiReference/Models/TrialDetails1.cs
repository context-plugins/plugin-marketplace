using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing trial details. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>trial_details</c> do not override those from the plan.
/// </summary>
public record TrialDetails1
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
