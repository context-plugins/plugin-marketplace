using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// VendorCredit response Dto.
/// </summary>
public record VendorCreditResponseDto
{
    /// <summary>
    /// BILL-generated ID of the vendor credit. The value begins with <c>vcr</c>.
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
    /// User-generated vendor credit number. This value can be in your chosen number scheme.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceNumber")]
    public string? ReferenceNumber { get; init; }

    /// <summary>
    /// Vendor credit issued date. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditDate")]
    public DateTimeOffset? CreditDate { get; init; }

    /// <summary>
    /// Vendor credit description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the vendor credit is archived
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts used when the vendor credit is applied to a bill payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applyToChartOfAccountId")]
    public string? ApplyToChartOfAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the bank account used when the vendor credit is applied to a bill payment. The value begins with <c>bac</c>.
    /// <para>
    /// <b>Note</b>: You can set only one of <c>applyToChartOfAccountId</c> or <c>applyToBankAccountId</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applyToBankAccountId")]
    public string? ApplyToBankAccountId { get; init; }

    /// <summary>
    /// Vendor credit amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Vendor credit amount applied to invoices
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appliedAmount")]
    public double? AppliedAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public CreditStatusDto? Status { get; init; }

    /// <summary>
    /// Vendor credit created time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Vendor credit updated time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Vendor credit line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorCreditLineItems")]
    public IReadOnlyList<VendorCreditLineItemResponseDto>? VendorCreditLineItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
