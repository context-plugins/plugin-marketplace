using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Create a budget
/// </summary>
public record BudgetCreateDto
{
    /// <summary>
    /// Budget name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// Budget description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// List of BILL-generated user IDs or UUIDs of budget owners. You must specify at least one budget owner.
    /// </summary>
    [JsonPropertyName("owners")]
    [MinLength(1)]
    public required IReadOnlyList<string> Owners { get; init; }

    /// <summary>
    /// List of BILL-generated user IDs or UUIDs of budget members
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("members")]
    public IReadOnlyList<string>? Members { get; init; }

    /// <summary>
    /// List of BILL-generated user IDs or UUIDs of budget observers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observers")]
    public IReadOnlyList<string>? Observers { get; init; }

    /// <summary>
    /// Budget expiration date. This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationDate")]
    public DateTimeOffset? ExpirationDate { get; init; }

    [JsonPropertyName("recurringInterval")]
    public required PeriodIntervalType RecurringInterval { get; init; }

    /// <summary>
    /// The month in which the budget will recur. Set this field only when <c>recurringInterval</c> is set as <c>QUARTERLY</c> or <c>YEARLY</c>. The default value is the current month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurMonth")]
    [Minimum(1)]
    [Maximum(12)]
    public long? RecurMonth { get; init; }

    /// <summary>
    /// Timezone in which the budget funds are reset. The default value is the timezone of the company's billing address.
    /// <para>
    /// Set this field in the <c>US/{time_zone}</c> format. For example, <c>US/Pacific</c> or <c>US/Mountain</c>.
    /// </para>
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
    /// BILL-generated ID or UUID of the parent budget. Set this field if this budget is a child budget.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentBudgetId")]
    public string? ParentBudgetId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if this budget is a budget group. A budget group can be set as a parent of other budgets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetGroup")]
    public bool? BudgetGroup { get; init; }

    /// <summary>
    /// Set as <c>true</c> for enabling spend amounts over the budget limit.
    /// <para>
    /// <b>Note</b>: You cannot set this field as <c>true</c> for budgets with <c>recurringInterval</c> set as
    /// <c>DAILY</c> or <c>WEEKLY</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitlessOverspend")]
    public bool? LimitlessOverspend { get; init; }

    /// <summary>
    /// Spend limit for the initial budget period.
    /// <para>
    /// <b>Note</b>: This field is required unless <c>limitlessOverspend</c> is set as <c>true</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    /// <summary>
    /// Spend goal for a limitless budget.
    /// <para>
    /// <b>Note</b>: You can set this field when <c>limitlessOverspend</c> is set as <c>true</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitlessGoal")]
    public double? LimitlessGoal { get; init; }

    /// <summary>
    /// Spend limit for all future budget periods.
    /// <para>
    /// <b>Note</b>: This field is required when <c>recurringInterval</c> is set as any value other than <c>NONE</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    /// <summary>
    /// Spend amount allowed above the budget limit before transactions are declined.
    /// <para>
    /// <b>Note</b>: You cannot set this field when <c>limitlessOverspend</c> is set as <c>true</c> or for budgets with <c>recurringInterval</c> as <c>DAILY</c> or <c>WEEKLY</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overspendBuffer")]
    public double? OverspendBuffer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareFunds")]
    public EditBudgetShareFundsType? ShareFunds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
