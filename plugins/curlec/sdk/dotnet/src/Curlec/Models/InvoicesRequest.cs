using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record InvoicesRequest
{
    /// <summary>
    /// invoice: formal invoice; link: payment page.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Existing customer ID (cust_*). Provide this OR customer object, not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Inline customer details. Used when no customer_id is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer")]
    public CustomerRazorpayInvoicesApi? Customer { get; init; }

    /// <summary>
    /// Invoice line items. Each item must have name and amount (in paise), or an item_id to reference a catalog item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line_items")]
    [MaxLength(50)]
    public IReadOnlyList<LineItemRazorpayInvoicesApi>? LineItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "INR";

    /// <summary>
    /// Your internal reference number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt")]
    public string? Receipt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment")]
    public string? Comment { get; init; }

    /// <summary>
    /// Payment terms shown on the invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terms")]
    public string? Terms { get; init; }

    /// <summary>
    /// Allow customer to pay a partial amount initially.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_payment")]
    public bool? PartialPayment { get; init; }

    /// <summary>
    /// Minimum first payment amount in paise. Required when partial_payment=true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_payment_min_amount")]
    public int? FirstPaymentMinAmount { get; init; }

    /// <summary>
    /// Unix timestamp after which the invoice expires. Must be at least 15 minutes in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expire_by")]
    public int? ExpireBy { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
