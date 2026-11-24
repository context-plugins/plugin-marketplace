using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a virtual charge card
/// </summary>
public record CreateCardRequestDto
{
    /// <summary>
    /// Card name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// BILL-generated ID or UUID of the user linked with the card
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// BILL-generated ID or UUID of the budget linked with the card
    /// </summary>
    [JsonPropertyName("budgetId")]
    public required string BudgetId { get; init; }

    /// <summary>
    /// Card spend limit for the current budget period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    /// <summary>
    /// Card spend limit for all future budget periods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    /// <summary>
    /// User-generated expiration date. The value is in the <c>yyyy-MM-dd</c> format. BILL automatically closes the card account on this date.
    /// <para>
    /// <b>Note</b>: Use the <c>validThru</c> value in the response as the expiration date in a card payment. Do not use the <c>expirationDate</c> value for this operation.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationDate")]
    public DateTimeOffset? ExpirationDate { get; init; }

    /// <summary>
    /// Set as <c>true</c> to share all the budget funds with the card. This option enables the card user to spend from unallocated budget funds when the allocation is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareBudgetFunds")]
    public bool? ShareBudgetFunds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
