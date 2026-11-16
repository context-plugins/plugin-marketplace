using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing details about the buyer.
/// </summary>
public record BuyerDetails7
{
    /// <summary>
    /// The <see href="/api/identities">Identity ID</see> of the buyer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_id")]
    public string? IdentityId { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/payment-instruments">Payment Instrument</see> from which the <c>Subscription</c> payments get debited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_id")]
    public object? InstrumentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
