using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing discount phase details.
/// </summary>
public record DiscountPhaseDetails2
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
