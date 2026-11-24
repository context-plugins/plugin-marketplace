using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update a reimbursement (Date updated)
/// </summary>
public record UpdateReimbursementRequestDto
{
    /// <summary>
    /// BILL-generated ID of the user to be reimbursed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// BILL-generated ID of the budget to be used for the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetId")]
    public string? BudgetId { get; init; }

    /// <summary>
    /// Reimbursement amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Reimbursement note. Use this field to describe the business purpose for the expense.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    /// <summary>
    /// Merchant name for the expense
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantName")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// Expense created date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurredDate")]
    public DateTimeOffset? OccurredDate { get; init; }

    /// <summary>
    /// List of reimbursement custom fields and values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customFields")]
    public IReadOnlyList<UpdateCustomFieldDto>? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
