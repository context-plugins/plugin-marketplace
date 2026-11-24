using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Payments response.
/// </summary>
public record PaymentResponseDto
{
    /// <summary>
    /// BILL-generated ID of the payment. The value begins with <c>stp</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated ID of the vendor to be paid. The value begins with <c>009</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public string? VendorId { get; init; }

    /// <summary>
    /// Vendor name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorName")]
    public string? VendorName { get; init; }

    /// <summary>
    /// BILL-generated ID of the bill to be paid. The value begins with <c>00n</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billId")]
    public string? BillId { get; init; }

    /// <summary>
    /// List of bill payments. When a payment is applied to a bill, the bill payment is identified by a bill payment <c>id</c>. The value begins with <c>blp</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billPayments")]
    public IReadOnlyList<BillPayment>? BillPayments { get; init; }

    /// <summary>
    /// Bill payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Payment process date in the <c>yyyy-MM-dd</c> format. On this date, BILL starts processing the payment and starts withdrawing funds from the sender's funding account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processDate")]
    public DateTimeOffset? ProcessDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingAccount")]
    public FundingAccount1? FundingAccount { get; init; }

    /// <summary>
    /// Payment amount. For a payment in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processingOptions")]
    public ProcessingOptions1? ProcessingOptions { get; init; }

    /// <summary>
    /// Payment transaction reference used as an external identifier.
    /// <para>
    /// You can set this field as a unique alphanumeric value for your system to track the payment transaction. The value must be 50 characters or fewer. If you do not set <c>transactionNumber</c>, BILL sets this field as a unique alphanumeric payment identification value.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionNumber")]
    public string? TransactionNumber { get; init; }

    /// <summary>
    /// BILL-generated bill payment confirmation value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confirmationNumber")]
    public string? ConfirmationNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public PaymentStatus? Status { get; init; }

    /// <summary>
    /// Exchange rate for the payment in an international currency (not USD)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRate")]
    public double? ExchangeRate { get; init; }

    /// <summary>
    /// Payment amount in USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingAmount")]
    public double? FundingAmount { get; init; }

    /// <summary>
    /// Payment source.
    /// * <c>true</c>: Payment is made with BILL (online)
    /// * <c>false</c>: Payment is made outside BILL and then recorded in BILL (offline)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onlinePayment")]
    public bool? OnlinePayment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursementType")]
    public DisbursementType? DisbursementType { get; init; }

    /// <summary>
    /// Remittance email address set for the vendor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remittanceEmail")]
    public string? RemittanceEmail { get; init; }

    /// <summary>
    /// Payment created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Payment updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// BILL-generated ID of the user that created the payment. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// Void request information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voidInfo")]
    public IReadOnlyList<VoidInfo>? VoidInfo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursementStatus")]
    public DisbursementStatus? DisbursementStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursementInfo")]
    public DisbursementInfo1? DisbursementInfo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentPurpose")]
    public PaymentPurpose1? PaymentPurpose { get; init; }

    /// <summary>
    /// Card funding purpose
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardFundingPurpose")]
    public string? CardFundingPurpose { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if a cancel payment request is submitted.
    /// <para>
    /// <b>Note</b>: If the payment is cancelled, the payment <c>status</c> is set as <c>CANCELLED</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancelRequestSubmitted")]
    public bool? CancelRequestSubmitted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("singleStatus")]
    public PaymentSingleStatus2BillV3PaymentsApi? SingleStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
