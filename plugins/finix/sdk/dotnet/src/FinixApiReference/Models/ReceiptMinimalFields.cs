using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record ReceiptMinimalFields
{
    /// <summary>
    /// The ID of the <c>Transfer</c> or <c>Authorization</c> for which the receipt must be generated.
    /// </summary>
    [JsonPropertyName("entity_id")]
    public required string EntityId { get; init; }

    /// <summary>
    /// A list of requested delivery methods. Each method specifies
    /// the type of delivery and the destination(s) where the receipt should be sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_delivery_methods")]
    public IReadOnlyList<ReceiptRequestedDeliveryMethod>? RequestedDeliveryMethods { get; init; }

    /// <summary>
    /// Whether to send a receipt to the buyer.
    /// </summary>
    [JsonPropertyName("send_receipt_to_buyer")]
    public required bool SendReceiptToBuyer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
