using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing default billing settings.
/// </summary>
public record BillingDefaults
{
    /// <summary>
    /// The method by which subscription payments are collected. At this time, only <c>BILL_AUTOMATICALLY</c> is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collection_method")]
    public CollectionMethod? CollectionMethod { get; init; }

    /// <summary>
    /// This feature has yet to be implemented.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_invoice")]
    public bool? SendInvoice { get; init; }

    /// <summary>
    /// This feature has yet to be implemented.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_receipt")]
    public bool? SendReceipt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
