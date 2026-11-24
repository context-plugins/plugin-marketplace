using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Recommendation and automation engine settings for one product line on a GCP billing account.
/// </summary>
public record GcpBillingAccountSettings
{
    /// <summary>
    /// Whether purchases execute automatically or require customer approval before the planner proceeds. Configured in the DoiT Console Settings tab; this settings API is read-only.
    /// </summary>
    [JsonPropertyName("purchaseMode")]
    public required PurchaseMode PurchaseMode { get; init; }

    /// <summary>
    /// Minimum hourly commitment amount (USD) per purchase step.
    /// </summary>
    [JsonPropertyName("minimumCommitment")]
    public required double MinimumCommitment { get; init; }

    /// <summary>
    /// Latest calendar day of the month on which a purchase may be scheduled.
    /// </summary>
    [JsonPropertyName("lastDayOfMonthForPurchase")]
    public required int LastDayOfMonthForPurchase { get; init; }

    /// <summary>
    /// Maximum total hourly commitment (USD). <c>0</c> means no cap.
    /// </summary>
    [JsonPropertyName("maximumCommitment")]
    public required double MaximumCommitment { get; init; }

    /// <summary>
    /// Preferred commitment term length for new purchases.
    /// </summary>
    [JsonPropertyName("term")]
    public required CommitmentTerm Term { get; init; }

    /// <summary>
    /// Coverage target policy for recommendations and purchases (built-in or customer-defined).
    /// </summary>
    [JsonPropertyName("policy")]
    public required string Policy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
