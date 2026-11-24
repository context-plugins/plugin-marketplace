using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Organization-specific recommendation and automation settings for one activated commitment type.
/// </summary>
public record AwsOrganizationSettings
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
    /// Latest calendar day of the month (1–28) on which new purchases may be scheduled. After this day, the No Purchase Window applies until the next month. Default is 25; the maximum allowed value is 28 to leave a buffer before month-end billing cycles.
    /// </summary>
    [JsonPropertyName("lastDayOfMonthForPurchase")]
    [Minimum(1)]
    [Maximum(28)]
    public int LastDayOfMonthForPurchase { get; init; } = 25;

    /// <summary>
    /// Maximum total hourly commitment (USD). <c>0</c> means no cap. Always present on settings responses.
    /// </summary>
    [JsonPropertyName("maximumCommitment")]
    public required double MaximumCommitment { get; init; }

    /// <summary>
    /// Preferred commitment term length for new purchases.
    /// </summary>
    [JsonPropertyName("term")]
    public required CommitmentTerm Term { get; init; }

    /// <summary>
    /// Preferred payment structure for new commitments.
    /// </summary>
    [JsonPropertyName("paymentOption")]
    public required PaymentOption PaymentOption { get; init; }

    /// <summary>
    /// Coverage target policy for recommendations and purchases (built-in or customer-defined).
    /// </summary>
    [JsonPropertyName("policy")]
    public required string Policy { get; init; }

    /// <summary>
    /// Fraction of total cost paid upfront (0–1) when <c>paymentOption</c> is <c>partial_upfront</c>. In the DoiT Console this is set as 50–99% and applies to AWS Compute only; Database uses <c>no_upfront</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upfrontPercentage")]
    public double? UpfrontPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
