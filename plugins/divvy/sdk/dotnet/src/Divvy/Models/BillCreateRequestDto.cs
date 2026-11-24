using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a bill
/// </summary>
public record BillCreateRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    [MinLength(1)]
    public required string VendorId { get; init; }

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
    [JsonPropertyName("dueDate")]
    public required DateTimeOffset DueDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    /// <summary>
    /// Bill line items information
    /// </summary>
    [JsonPropertyName("billLineItems")]
    [MinLength(1)]
    public required IReadOnlyList<BillCreateLineItemDto> BillLineItems { get; init; }

    [JsonPropertyName("invoice")]
    public required Invoice1 Invoice { get; init; }

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
    /// <b>Note</b>: When you set <c>billApprovals</c> as <c>true</c>, you must set the field as <c>true</c> if you want to update the bill (<c>PATCH /v3/bills/{billId}</c>) or replace the bill (<c>PUT /v3/bills/{billId}</c>).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billApprovals")]
    public bool? BillApprovals { get; init; }

    /// <summary>
    /// Set as <c>false</c> to reject the request when the bill's <c>invoice.invoiceNumber</c> duplicates an existing invoice number for the vendor. Defaults to <c>true</c>, which allows duplicate invoice numbers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowDuplicateInvoiceNumber")]
    public bool? AllowDuplicateInvoiceNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
