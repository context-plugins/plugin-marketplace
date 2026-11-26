using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Update a credit memo
/// </summary>
public record UpdateCreditMemoRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// User-generated credit memo number. This value can be in your chosen number scheme.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceNumber")]
    [MaxLength(100)]
    public string? ReferenceNumber { get; init; }

    /// <summary>
    /// Credit memo issued date. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditDate")]
    public DateTimeOffset? CreditDate { get; init; }

    /// <summary>
    /// Credit memo description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// BILL-generated ID of the <c>SALES_TAX</c> item. The value begins with <c>0ii</c>. The tax rate is applied to all the credit memo line items set as taxable.
    /// <para>
    /// You can set up a <c>SALES_TAX</c> percentage item with <c>POST /v3/classifications/items</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTaxItemId")]
    public string? SalesTaxItemId { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts used when the credit memo is applied to an invoice payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payToChartOfAccountId")]
    public string? PayToChartOfAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the bank account used when the credit memo is applied to an invoice payment. The value begins with <c>bac</c>.
    /// <para>
    /// <b>Note</b>: You can set only one of <c>payToChartOfAccountId</c> or <c>payToBankAccountId</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payToBankAccountId")]
    public string? PayToBankAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications1BillV3CreditMemosApi? Classifications { get; init; }

    /// <summary>
    /// Credit memo line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditMemoLineItems")]
    public IReadOnlyList<UpdateCreditMemoLineItemDto>? CreditMemoLineItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
