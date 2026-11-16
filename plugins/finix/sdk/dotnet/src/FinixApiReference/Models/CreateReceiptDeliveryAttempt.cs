using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CreateReceiptDeliveryAttempt
{
    /// <summary>
    /// A list of delivery methods used to send the receipt.
    /// </summary>
    [JsonPropertyName("requested_delivery_methods")]
    public required IReadOnlyList<RequestedDeliveryMethod1> RequestedDeliveryMethods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
