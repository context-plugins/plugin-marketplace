using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing details about the buyer.
/// </summary>
public record BuyerDetails5
{
    /// <summary>
    /// The <see href="/api/identities">identity ID</see> of the buyer.
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required string IdentityId { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/payment-instruments"><c>Payment Instrument</c></see> from which the subscription payments get debited.
    /// </summary>
    [JsonPropertyName("instrument_id")]
    public required object InstrumentId { get; init; }

    /// <summary>
    /// A list of requested delivery methods. Each method specifies
    /// the type of delivery and the destination(s) where the receipt should be sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_delivery_methods")]
    public IReadOnlyList<ReceiptRequestedDeliveryMethod>? RequestedDeliveryMethods { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_address")]
    public Address? ShippingAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
