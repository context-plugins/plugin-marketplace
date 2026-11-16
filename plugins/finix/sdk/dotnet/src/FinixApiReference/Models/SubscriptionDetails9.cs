using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing subscription details.
/// </summary>
public record SubscriptionDetails9
{
    /// <summary>
    /// Whether to send the user an invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_invoice")]
    public bool? SendInvoice { get; init; }

    /// <summary>
    /// Whether to send the user a receipt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_receipt")]
    public bool? SendReceipt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
