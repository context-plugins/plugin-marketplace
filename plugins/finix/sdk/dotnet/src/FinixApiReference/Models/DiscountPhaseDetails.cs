using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing discount phase details.
/// </summary>
public record DiscountPhaseDetails
{
    /// <summary>
    /// The discounted amount (in cents) that the buyer is charged during the discount phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// The number of billing intervals the discount applies. After this period, the buyer is charged the full <c>amount</c> from the <c>Subscription</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_interval_count")]
    public int? BillingIntervalCount { get; init; }

    /// <summary>
    /// A timestamp indicating when the discount phase began.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_started_at")]
    public DateTimeOffset? DiscountPhaseStartedAt { get; init; }

    /// <summary>
    /// A timestamp indicating when the discount phase is expected to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_expected_start_at")]
    public DateTimeOffset? DiscountPhaseExpectedStartAt { get; init; }

    /// <summary>
    /// A timestamp indicating when the discount phase is expected to end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_expected_end_at")]
    public DateTimeOffset? DiscountPhaseExpectedEndAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
