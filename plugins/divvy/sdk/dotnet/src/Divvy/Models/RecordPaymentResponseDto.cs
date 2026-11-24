using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Record offline payment response dto.
/// </summary>
public record RecordPaymentResponseDto
{
    /// <summary>
    /// BILL-generated ID of the payment. The value begins with <c>stp</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public string? VendorId { get; init; }

    /// <summary>
    /// BILL-generated ID of the bill. The value begins with <c>00n</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billId")]
    public string? BillId { get; init; }

    /// <summary>
    /// List of bill payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billPayments")]
    public IReadOnlyList<RecordBillPayResponseDto>? BillPayments { get; init; }

    /// <summary>
    /// Payment description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Payment process date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processDate")]
    public DateTimeOffset? ProcessDate { get; init; }

    /// <summary>
    /// Payment amount. For a payment in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// BILL-generated alphanumeric payment identification value
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
    /// <para>
    /// This field is set as <c>false</c> for the Record AP payment operation.
    /// </para>
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursementStatus")]
    public DisbursementStatus? DisbursementStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("singleStatus")]
    public PaymentSingleStatus2? SingleStatus { get; init; }

    /// <summary>
    /// Set as <c>true</c> to set the payment check as printable in your accounting system. Use this field only for check payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toPrintCheck")]
    public bool? ToPrintCheck { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications? Classifications { get; init; }

    /// <summary>
    /// Payment reference ID in your accounting system. Set this field with payment information, such as check number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncReference")]
    public string? SyncReference { get; init; }

    /// <summary>
    /// Set as <c>true</c> to sync the bill payment with your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowExport")]
    public bool? AllowExport { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
