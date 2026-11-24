using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update VendorCredit with id request Dto.
/// </summary>
public record UpdateVendorCreditWithIdRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor credit. The value begins with <c>vcr</c>.
    /// </summary>
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

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
    [MaxLength(100)]
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
    /// Vendor credit line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorCreditLineItems")]
    public IReadOnlyList<UpdateVendorCreditLineItemDto>? VendorCreditLineItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
