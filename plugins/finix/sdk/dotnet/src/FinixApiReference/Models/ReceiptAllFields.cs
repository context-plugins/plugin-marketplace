using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record ReceiptAllFields
{
    /// <summary>
    /// An array of key-value pairs for including metadata or custom information related to the receipt. Each entry must contain a <c>name</c> and a corresponding <c>value</c> as strings.
    /// <para>
    /// <c>additional_details</c> is mutually exclusive with <c>customization_details.subheader_attributes</c>. Passing both in the request results in an error.
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
    public AmountBreakdown1? AmountBreakdown { get; init; }

    /// <summary>
    /// Custom attributes and free-form text sections to display on the PDF receipt.
    /// <para>
    /// <c>customization_details.subheader_attributes</c> is mutually exclusive with <c>additional_details</c>. Passing both in the request results in an error.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customization_details")]
    public CustomizationDetails? CustomizationDetails { get; init; }

    /// <summary>
    /// The ID of the <c>Transfer</c> or <c>Authorization</c> for which the receipt must be generated.
    /// </summary>
    [JsonPropertyName("entity_id")]
    public required string EntityId { get; init; }

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
    public IReadOnlyList<RequestedDeliveryMethod1>? RequestedDeliveryMethods { get; init; }

    /// <summary>
    /// Whether to send a receipt to the buyer.
    /// </summary>
    [JsonPropertyName("send_receipt_to_buyer")]
    public required bool SendReceiptToBuyer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
