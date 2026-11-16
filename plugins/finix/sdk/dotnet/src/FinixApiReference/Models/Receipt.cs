using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Receipt
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of key-value pairs for including metadata or custom information related to the receipt. Each entry must contain a <c>name</c> and a corresponding <c>value</c> as strings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_details")]
    public IReadOnlyList<AdditionalDetail>? AdditionalDetails { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_id")]
    [MinLength(1)]
    public string? ApplicationId { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The individual charges/fees that add up to the total amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_breakdown")]
    public AmountBreakdown2? AmountBreakdown { get; init; }

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
    /// Whether to send a receipt to the buyer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_receipt_to_buyer")]
    public bool? SendReceiptToBuyer { get; init; }

    /// <summary>
    /// Applies to <see href="/guides/in-person-payments">in-person payments</see>. The ID of the Point-of-Sale terminal used to process the payment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_id")]
    public string? DeviceId { get; init; }

    /// <summary>
    /// The <c>Transfer</c> or <c>Authorization</c> details from which to generate the receipt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity_details")]
    public EntityDetails? EntityDetails { get; init; }

    /// <summary>
    /// The type of receipt, either for the customer (<c>BUYER</c>) or the merchant (<c>MERCHANT</c>) for a CP (card-present) transaction. For a CNP transaction, the <c>type</c> will be <c>BUYER</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type25? Type { get; init; }

    /// <summary>
    /// An itemized list of products/services.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<Item>? Items { get; init; }

    /// <summary>
    /// Object containing <c>Merchant</c> details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_details")]
    public MerchantDetails? MerchantDetails { get; init; }

    /// <summary>
    /// Object containing <c>Payment Instrument</c> details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_details")]
    public PaymentInstrumentDetails? PaymentInstrumentDetails { get; init; }

    /// <summary>
    /// An object containing EMV data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_details")]
    public NetworkDetails1? NetworkDetails { get; init; }

    /// <summary>
    /// An array of delivery methods used to send the receipt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_delivery_methods")]
    public IReadOnlyList<RequestedDeliveryMethod1>? RequestedDeliveryMethods { get; init; }

    /// <summary>
    /// The location of the receipt on Finix's Amazon S3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_url")]
    public string? ReceiptUrl { get; init; }

    /// <summary>
    /// An object containing link(s) relevant to the request. You can store these links for follow-up requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links22? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
