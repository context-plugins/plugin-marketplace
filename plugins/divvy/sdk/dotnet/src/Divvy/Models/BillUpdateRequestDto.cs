using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update a bill
/// </summary>
public record BillUpdateRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorId")]
    public string? VendorId { get; init; }

    /// <summary>
    /// Bill description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// Bill due date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonPropertyName("paymentTermId")]
    public required string PaymentTermId { get; init; }

    /// <summary>
    /// Bill line items information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billLineItems")]
    public IReadOnlyList<BillUpdateLineItemDto>? BillLineItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoice")]
    public Invoice2? Invoice { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the bill payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payFromChartOfAccountId")]
    public string? PayFromChartOfAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications2? Classifications { get; init; }

    /// <summary>
    /// Vendor credits applied to the bill
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorCredits")]
    public IReadOnlyList<BillVendorCreditRequestItemDto>? VendorCredits { get; init; }

    /// <summary>
    /// Purchase order number linked with the bill
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderNumber")]
    public string? PurchaseOrderNumber { get; init; }

    /// <summary>
    /// Set as <c>true</c> for BILL to add approvals information in the response.
    /// <para>
    /// When you have approval policies set up for bills and a bill matches a policy, you see an additional <c>approvers</c> array of objects in the response. The array shows the list of individual users and/or user groups assigned as bill approvers. In addition, the array provides information about the status of the bill in the current approval flow.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you set <c>billApprovals</c> as <c>true</c>, you must set the field as <c>true</c> if you want to replace the bill with <c>PUT /v3/bills/{billId}</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billApprovals")]
    public bool? BillApprovals { get; init; }

    /// <summary>
    /// Rule for whether BILL re-matches the updated bill against your approval policies. The default value is <c>false</c>.
    /// * <c>true</c>: Rematch the updated bill. BILL removes any previously assigned approvers that are no longer valid, and then assigns any new approvers that match your policy rules.
    /// * <c>false</c>: Do not rematch the updated bill. BILL assigns any new approvers that match your policy rules. Any previously assigned approvers are not removed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policyRematch")]
    public bool? PolicyRematch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
