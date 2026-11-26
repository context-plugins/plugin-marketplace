using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Create a reimbursement
/// </summary>
public record CreateReimbursementRequestDto
{
    /// <summary>
    /// BILL-generated ID of the user to be reimbursed
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// BILL-generated ID of the budget to be used for the reimbursement
    /// </summary>
    [JsonPropertyName("budgetId")]
    public required string BudgetId { get; init; }

    /// <summary>
    /// Reimbursement amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// Reimbursement note. Use this field to describe the business purpose for the expense.
    /// </summary>
    [JsonPropertyName("note")]
    public required string Note { get; init; }

    /// <summary>
    /// Merchant name for the expense
    /// </summary>
    [JsonPropertyName("merchantName")]
    public required string MerchantName { get; init; }

    /// <summary>
    /// Expense created date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonPropertyName("occurredDate")]
    public required DateTimeOffset OccurredDate { get; init; }

    /// <summary>
    /// List of reimbursement receipts
    /// </summary>
    [JsonPropertyName("receipts")]
    public required IReadOnlyList<ReimbursementReceiptRequestDto> Receipts { get; init; }

    /// <summary>
    /// List of reimbursement custom fields and values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customFields")]
    public IReadOnlyList<UpdateCustomFieldDto>? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
