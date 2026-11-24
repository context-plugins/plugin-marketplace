using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Bills read response without approvers.
/// </summary>
public record BillReadWithoutApproversResponseDto
{
    /// <summary>
    /// BILL-generated ID of the bill. The value begins with <c>00n</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("recordStatus")]
    public required BillRecordStatus RecordStatus { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the bill is archived
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    public required string VendorId { get; init; }

    /// <summary>
    /// Vendor name
    /// </summary>
    [JsonPropertyName("vendorName")]
    public required string VendorName { get; init; }

    /// <summary>
    /// Bill total amount. This value is in USD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingAmount")]
    public double? FundingAmount { get; init; }

    /// <summary>
    /// Bill total amount. For a bill in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Bill paid amount. This value is the sum of all cleared payments and any credit amount applied to the bill.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paidAmount")]
    public double? PaidAmount { get; init; }

    /// <summary>
    /// Bill due amount. The value is calculated by subtracting any applied credits (<c>creditAmount</c>), scheduled payment (<c>scheduledAmount</c>), and cleared payment from the bill <c>amount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueAmount")]
    public double? DueAmount { get; init; }

    /// <summary>
    /// Bill scheduled amount. The value is set as the vendor payment amount that is pending clearance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduledAmount")]
    public double? ScheduledAmount { get; init; }

    /// <summary>
    /// Credit amount applied to the bill
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditAmount")]
    public double? CreditAmount { get; init; }

    /// <summary>
    /// Exchange rate for the bill amount in an international currency (not USD).
    /// <para>
    /// The BILL exchange rate changes periodically and a different rate may apply at the time of payment.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRate")]
    public double? ExchangeRate { get; init; }

    /// <summary>
    /// Bill description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Bill due date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice")]
    public Invoice1? Invoice { get; init; }

    /// <summary>
    /// Bill line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billLineItems")]
    public IReadOnlyList<BillResponseLineItem>? BillLineItems { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the bill payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payFromChartOfAccountId")]
    public string? PayFromChartOfAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentStatus")]
    public BillPaymentStatusDto? PaymentStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvalStatus")]
    public BillApprovalStatusResponse? ApprovalStatus { get; init; }

    /// <summary>
    /// BILL-generated ID of the user that created the bill. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications2? Classifications { get; init; }

    /// <summary>
    /// Purchase order number linked with the bill
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderNumber")]
    public string? PurchaseOrderNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
