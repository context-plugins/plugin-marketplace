using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a bulk payment
/// </summary>
public record BulkPaymentRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor to be paid. The value begins with <c>009</c>.
    /// * If <c>vendorId</c> is set, it must match each bill’s vendor ID.
    /// * Do not set <c>vendorId</c> when you are paying multiple vendors with one request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public string? VendorId { get; init; }

    /// <summary>
    /// Bill payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(70)]
    public string? Description { get; init; }

    /// <summary>
    /// Payment process date in the <c>yyyy-MM-dd</c> format. On this date, BILL starts processing the payment and starts withdrawing funds from the sender's funding account.
    /// <para>
    /// When the vendor bill currency is not <c>USD</c> (For example, <c>EUR</c>), the payment <c>processDate</c> for this vendor must be the next US business day.
    /// </para>
    /// <para>
    /// If the funding account <c>type</c> is set as <c>WALLET</c> or <c>AP_CARD</c>, <c>processDate</c> is required. For other funding account types, if <c>processDate</c> is not set, the date is automatically set as the next US business day.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a <c>processDate</c> that is 2 business days from the current date.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processDate")]
    public DateTimeOffset? ProcessDate { get; init; }

    /// <summary>
    /// Exchange rate batch ID. This field is required for paying international vendors when the vendor bill currency is not <c>USD</c>.
    /// <para>
    /// Get the current BILL exchange rate and exchange rate batch ID with <c>GET /v3/payments/exchange-rate</c> or <c>POST /v3/payments/exchange-rate</c> (for multiple international vendors).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRateBatchId")]
    public int? ExchangeRateBatchId { get; init; }

    [JsonPropertyName("fundingAccount")]
    public required FundingAccount FundingAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payments")]
    public IReadOnlyList<BillPay>? Payments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processingOptions")]
    public ProcessingOptions2? ProcessingOptions { get; init; }

    /// <summary>
    /// Payment transaction reference used as an external identifier.
    /// <para>
    /// You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value must be 50 characters or fewer. If you do not set <c>transactionNumber</c>, BILL sets this field as a unique alphanumeric payment identification value.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionNumber")]
    [MaxLength(50)]
    public string? TransactionNumber { get; init; }

    /// <summary>
    /// Card funding purpose. This field is required for the <c>CARD_ACCOUNT</c> funding account <c>type</c> if BILL cannot identify the vendor industry.
    /// <para>
    /// See <see href="https://developer.bill.com/reference/listcardfundingpurposes">Get card funding purpose</see> for more information.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardFundingPurpose")]
    public string? CardFundingPurpose { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
