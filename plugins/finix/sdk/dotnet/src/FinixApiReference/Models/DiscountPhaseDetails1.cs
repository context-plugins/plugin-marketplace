using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing discount phase details. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>discount_phase_details</c> do not override the plan's values.
/// </summary>
public record DiscountPhaseDetails1
{
    /// <summary>
    /// The discounted amount (in cents) that the buyer is charged during the discount phase.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    /// <summary>
    /// The number of billing intervals the discount applies. After this period, the buyer is charged the full <c>amount</c> from the <c>Subscription</c>.
    /// </summary>
    [JsonPropertyName("billing_interval_count")]
    public required int BillingIntervalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
