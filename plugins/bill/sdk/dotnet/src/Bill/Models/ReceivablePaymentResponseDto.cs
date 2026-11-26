using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Receivable Payment response.
/// </summary>
public record ReceivablePaymentResponseDto
{
    /// <summary>
    /// BILL-generated ID of the received payment. The value begins with <c>0rp</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// List of invoice payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoicePayments")]
    public IReadOnlyList<InvoicePay>? InvoicePayments { get; init; }

    /// <summary>
    /// Invoice payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Received payment date. Funds are withdrawn from the customer bank account on this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentDate")]
    public DateTimeOffset? PaymentDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingAccount")]
    public FundingAccount3? FundingAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivablesAccount")]
    public ReceivablesAccount1? ReceivablesAccount { get; init; }

    /// <summary>
    /// Received payment amount. For a payment in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// Unapplied received payment amount. This value is available for an overpayment, double payment, or customer payment not currently linked to an invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unappliedAmount")]
    public double? UnappliedAmount { get; init; }

    /// <summary>
    /// Convenience fee charged to the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenienceFeeAmount")]
    public double? ConvenienceFeeAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivablesType")]
    public InvoicePaymentTypeResponse? ReceivablesType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public RecordInvoicePaymentStatus? Status { get; init; }

    /// <summary>
    /// Received payment reference number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceNumber")]
    public string? ReferenceNumber { get; init; }

    /// <summary>
    /// Information about how the received payment is recorded.
    /// * <c>true</c>: The payment is received with BILL
    /// * <c>false</c>: The payment is received outside BILL, and then recorded in BILL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onlinePayment")]
    public bool? OnlinePayment { get; init; }

    /// <summary>
    /// Received payment created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Received payment updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
