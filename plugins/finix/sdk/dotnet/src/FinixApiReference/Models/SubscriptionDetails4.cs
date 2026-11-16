using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing subscription details.
/// </summary>
public record SubscriptionDetails4
{
    /// <summary>
    /// The method by which subscription payments are collected. Currently, automatically billing the <c>Payment Instrument</c> is the only method available.
    /// </summary>
    [JsonPropertyName("collection_method")]
    public string CollectionMethod { get; } = "BILL_AUTOMATICALLY";

    /// <summary>
    /// Object containing discount phase details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_details")]
    public DiscountPhaseDetails2? DiscountPhaseDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
