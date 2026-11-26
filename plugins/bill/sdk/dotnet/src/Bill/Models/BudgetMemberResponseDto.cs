using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Budget members response.
/// </summary>
public record BudgetMemberResponseDto
{
    /// <summary>
    /// BILL-generated ID of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userUuid")]
    public string? UserUuid { get; init; }

    /// <summary>
    /// Total amount spent by the user in the current budget period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spent")]
    public double? Spent { get; init; }

    /// <summary>
    /// Funds assigned to the user in the current budget period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    /// <summary>
    /// Funds assigned to the user in all future budget periods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the user receives the <c>recurringLimit</c> funds in all future budget periods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring")]
    public bool? Recurring { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetRole")]
    public BudgetRoleType? BudgetRole { get; init; }

    /// <summary>
    /// User display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the budget member is retired
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retired")]
    public bool? Retired { get; init; }

    /// <summary>
    /// Set as <c>true</c> if all the budget funds are shared with the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareBudgetFunds")]
    public bool? ShareBudgetFunds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
