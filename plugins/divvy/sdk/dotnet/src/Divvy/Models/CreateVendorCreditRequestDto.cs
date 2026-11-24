using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a vendor credit
/// </summary>
public record CreateVendorCreditRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    [MinLength(1)]
    public required string VendorId { get; init; }

    /// <summary>
    /// User-generated vendor credit number. This value can be in your chosen number scheme.
    /// </summary>
    [JsonPropertyName("referenceNumber")]
    [StringLength(100, MinimumLength = 1)]
    public required string ReferenceNumber { get; init; }

    /// <summary>
    /// Vendor credit issued date. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonPropertyName("creditDate")]
    public required DateTimeOffset CreditDate { get; init; }

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
    [JsonPropertyName("vendorCreditLineItems")]
    [MinLength(1)]
    public required IReadOnlyList<CreateVendorCreditLineItemDto> VendorCreditLineItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
