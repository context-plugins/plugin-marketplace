using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// If provided the information will be used to generate a receipt if transaction is successful.
/// </summary>
public record ReceiptOptions
{
    /// <summary>
    /// An array of key-value pairs for including metadata or custom information related to the receipt. Each entry must contain a <c>name</c> and a corresponding <c>value</c> as strings.
    /// <para>
    /// These fields are currently supported for device-generated receipts only.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_details")]
    public IReadOnlyList<AdditionalDetail>? AdditionalDetails { get; init; }

    /// <summary>
    /// The individual charges/fees that add up to the total amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_breakdown")]
    public AmountBreakdown? AmountBreakdown { get; init; }

    /// <summary>
    /// An itemized list of products/services.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<Item>? Items { get; init; }

    /// <summary>
    /// An array of delivery methods used to send the receipt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_delivery_methods")]
    public IReadOnlyList<RequestedDeliveryMethod>? RequestedDeliveryMethods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
