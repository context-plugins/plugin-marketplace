using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single weekly ladder step within a projection.
/// </summary>
public record GcpPurchasePlanStep
{
    /// <summary>
    /// Step sequence number (1-based) within the ladder.
    /// </summary>
    [JsonPropertyName("order")]
    public required int Order { get; init; }

    /// <summary>
    /// Calendar date (UTC) when this purchase step is scheduled to execute, with format YYYY-MM-DD.
    /// </summary>
    [JsonPropertyName("scheduledDate")]
    public required DateTimeOffset ScheduledDate { get; init; }

    /// <summary>
    /// Hourly commitment to purchase on this step.
    /// </summary>
    [JsonPropertyName("purchaseAmount")]
    public required Money PurchaseAmount { get; init; }

    /// <summary>
    /// Total hourly commitment after this step executes.
    /// </summary>
    [JsonPropertyName("cumulativeCommitment")]
    public required Money CumulativeCommitment { get; init; }

    /// <summary>
    /// This step's proportional share of the projection-level <c>estimatedSavings</c>
    /// (allocated by purchase amount). Zero when the recommendation total is unavailable.
    /// </summary>
    [JsonPropertyName("estimatedSavings")]
    public required Money EstimatedSavings { get; init; }

    /// <summary>
    /// <c>true</c> if this is the initial bootstrap purchase.
    /// </summary>
    [JsonPropertyName("isBootstrap")]
    public required bool IsBootstrap { get; init; }

    /// <summary>
    /// <c>true</c> if this step reaches the target commitment.
    /// </summary>
    [JsonPropertyName("isFinal")]
    public required bool IsFinal { get; init; }

    /// <summary>
    /// <c>true</c> when this step's <c>cumulativeCommitment</c> exceeds the customer-approved
    /// commitment ceiling (<c>approvedFinalCommitment</c>). Used for per-step status in the
    /// ladder even when the projection-level <c>purchaseApprovalStatus</c> is <c>approved</c>.
    /// </summary>
    [JsonPropertyName("requiresApproval")]
    public required bool RequiresApproval { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
