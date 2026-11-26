using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Add a budget member
/// </summary>
public record BudgetMemberUpsertRequestDto
{
    /// <summary>
    /// Funds assigned to the user in the current budget period.
    /// <para>
    /// <b>Note</b>: This field is required with <c>shareBudgetFunds</c> is set as <c>false</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    /// <summary>
    /// Funds assigned to the user in all future budget periods.
    /// <para>
    /// <b>Note</b>: This field is required when <c>shareBudgetFunds</c> is set as <c>false</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public BudgetRoleType? Role { get; init; }

    /// <summary>
    /// Set as <c>true</c> to share all the budget funds with the user.
    /// <para>
    /// <b>Note</b>: You cannot set this field as <c>true</c> when either <c>limit</c> or <c>recurringLimit</c> is set.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareBudgetFunds")]
    public bool? ShareBudgetFunds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
