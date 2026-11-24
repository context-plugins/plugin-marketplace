using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Planned purchase projections for one PS4C product line.
/// </summary>
public record GcpPlannedPurchaseByService
{
    /// <summary>
    /// Commitment type this projection group belongs to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service6 Service { get; init; }

    /// <summary>
    /// GCP Billing Account ID.
    /// </summary>
    [JsonPropertyName("billingAccountId")]
    public required string BillingAccountId { get; init; }

    /// <summary>
    /// Per-region projection entries for this service, sorted with <c>global</c> first, then
    /// remaining regions alphabetically.
    /// </summary>
    [JsonPropertyName("regions")]
    public required IReadOnlyList<GcpPlannedPurchase> Regions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
