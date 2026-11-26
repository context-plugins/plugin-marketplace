using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Budgets response.
/// </summary>
public record BudgetResponseDto
{
    /// <summary>
    /// BILL-generated ID of the budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated UUID of the budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Budget name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Budget description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the budget is retired
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retired")]
    public bool? Retired { get; init; }

    /// <summary>
    /// Budget start date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// Budget expiration date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationDate")]
    public DateTimeOffset? ExpirationDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringInterval")]
    public PeriodIntervalType? RecurringInterval { get; init; }

    /// <summary>
    /// Timezone in which the budget funds are reset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// Set as <c>true</c> to automatically add all new users to this budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoAddUsers")]
    public bool? AutoAddUsers { get; init; }

    /// <summary>
    /// Set as <c>true</c> if a receipt is required for transactions in the budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptRequired")]
    public bool? ReceiptRequired { get; init; }

    /// <summary>
    /// Maximum transaction size in the budget. Any single transaction for an amount greater than <c>maxTxSize</c> will be declined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxTxSize")]
    public double? MaxTxSize { get; init; }

    /// <summary>
    /// Set as <c>true</c> for any budget funds assigned to users and vendor cards to carry over from one budget period to the next. The budget period is set with <c>recurringInterval</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("carryOver")]
    public bool? CarryOver { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the current budget is set as the default budget for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default")]
    public bool? Default { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentBudgetId")]
    public string? ParentBudgetId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the parent budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentBudgetUuid")]
    public string? ParentBudgetUuid { get; init; }

    /// <summary>
    /// Set as <c>true</c> if this budget is a budget group. A budget group can be set as a parent of other budgets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetGroup")]
    public bool? BudgetGroup { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareFunds")]
    public BudgetShareFundsType? ShareFunds { get; init; }

    /// <summary>
    /// Spend limit for all future budget periods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    /// <summary>
    /// Set as <c>true</c> for enabling spend amounts over the budget limit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitlessOverspend")]
    public bool? LimitlessOverspend { get; init; }

    /// <summary>
    /// Spend goal for a limitless budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitlessGoal")]
    public double? LimitlessGoal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentPeriod")]
    public CurrentPeriod? CurrentPeriod { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
