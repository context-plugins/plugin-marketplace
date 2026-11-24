using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// DTO representing a reimbursement response.
/// </summary>
public record ReimbursementResponseDto
{
    /// <summary>
    /// BILL-generated ID of the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated UUID of the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Reimbursement amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillmentType")]
    public FulfillmentType? FulfillmentType { get; init; }

    /// <summary>
    /// Amount that must be added to the user funds for the user to have enough funds for this reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundRequestAmount")]
    public double? FundRequestAmount { get; init; }

    /// <summary>
    /// Amount that must be added to the budget for the user to have enough funds for this reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundRequestBudgetAmount")]
    public double? FundRequestBudgetAmount { get; init; }

    /// <summary>
    /// Merchant name for the expense
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantName")]
    public string? MerchantName { get; init; }

    /// <summary>
    /// Reimbursement note. Use this field to describe the business purpose for the expense.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    /// <summary>
    /// Reimbursement request submission date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submittedTime")]
    public DateTimeOffset? SubmittedTime { get; init; }

    /// <summary>
    /// Expense created date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurredDate")]
    public DateTimeOffset? OccurredDate { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if the reimbursement has been deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retired")]
    public bool? Retired { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public ReimbursementStatus? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public ReimbursementType? Type { get; init; }

    /// <summary>
    /// ACH batch ID.
    /// <para>
    /// You can use <c>batchId</c> to identify the set of reimbursements bundled together when funds are withdrawn from the company bank account. Reimbursements with the same <c>batchId</c> are withdrawn at the same time.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchId")]
    public string? BatchId { get; init; }

    /// <summary>
    /// ACH batch amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchAmount")]
    public double? BatchAmount { get; init; }

    /// <summary>
    /// Reimbursement approval status history
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusHistory")]
    public IReadOnlyList<StatusHistory>? StatusHistory { get; init; }

    /// <summary>
    /// BILL-generated ID of the budget to be used for the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetId")]
    public string? BudgetId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the budget to be used for the reimbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetUuid")]
    public string? BudgetUuid { get; init; }

    /// <summary>
    /// BILL-generated ID of the user to be reimbursed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the user to be reimbursed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userUuid")]
    public string? UserUuid { get; init; }

    /// <summary>
    /// List of reimbursement receipts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipts")]
    public IReadOnlyList<ReceiptImage>? Receipts { get; init; }

    /// <summary>
    /// List of reimbursement custom fields and values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customFields")]
    public IReadOnlyList<CustomFieldDto>? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
