using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Additional information about the purchase used for <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and Level 3 Processing</see>. Please note that Visa is ending its Level 2 offering in April 2026.
/// </summary>
public record AdditionalPurchaseData
{
    /// <summary>
    /// A unique reference ID for the order such as a purchase order (PO) number or invoice number. A purchase order number (PO number) is a unique code assigned to a specific order of goods or services. The buyer creates this number when they make a purchase order. It helps both the buyer and the seller track the order, match invoices, and keep accurate financial records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_reference_number")]
    [MaxLength(17)]
    public string? CustomerReferenceNumber { get; init; }

    /// <summary>
    /// The duty in cents on the total purchase amount for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customs_duty_amount")]
    public int? CustomsDutyAmount { get; init; }

    /// <summary>
    /// The ISO country code of the order destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination_country_code")]
    public string? DestinationCountryCode { get; init; }

    /// <summary>
    /// The postal code of the order destination (10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination_postal_code")]
    [MaxLength(10)]
    public string? DestinationPostalCode { get; init; }

    /// <summary>
    /// The amount in cents of the discount for the order. You must include this field to qualify for Level 3 interchange benefits. Even if the value is (0), you should pass the field to qualify for Level 3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public int? DiscountAmount { get; init; }

    /// <summary>
    /// The order's invoice number (max 15 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice_reference_number")]
    [MaxLength(15)]
    public string? InvoiceReferenceNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_date")]
    public OrderDate? OrderDate { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Total aggregate tax amount in cents for the entire purchase. Field is automatically calculated if you pass in the itemized tax amounts.</description></item>
    ///   <item><description>For non-taxable transactions either set <c>sales_tax</c> to 0 or omit from payload and also set <c>tax_exempt</c> to <b>True</b>.</description></item>
    ///   <item><description>Request must align so <c>amount_excluding_sales_tax</c> + <c>sales_tax</c> = <c>amount_including_sales_tax</c>.</description></item>
    ///   <item><description>For Visa, this field no longer qualifies for lower interchange after April 17, 2026. Include <c>item_data</c> for Level 3 processing.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sales_tax")]
    public int? SalesTax { get; init; }

    /// <summary>
    /// The sales tax amount in cents Finix calculated from the <c>item_data</c> line items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sales_tax_finix_generated")]
    public int? SalesTaxFinixGenerated { get; init; }

    /// <summary>
    /// The postal code from where order is shipped (10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ship_from_postal_code")]
    [MaxLength(10)]
    public string? ShipFromPostalCode { get; init; }

    /// <summary>
    /// The shipping cost in cents for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_amount")]
    public int? ShippingAmount { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>For tax exempt purchases set to <b>True</b>.</description></item>
    ///   <item><description>If set to <b>True</b>, request can't include <c>sales_tax</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_exempt")]
    public bool? TaxExempt { get; init; }

    /// <summary>
    /// Additional information about the transaction. Used for Level 2 and Level 3 Processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item_data")]
    public IReadOnlyList<ItemDatum>? ItemData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
