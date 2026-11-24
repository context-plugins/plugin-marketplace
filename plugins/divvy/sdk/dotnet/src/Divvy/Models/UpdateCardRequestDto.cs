using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update a virtual charge card (limit updated)
/// </summary>
public record UpdateCardRequestDto
{
    /// <summary>
    /// Card name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// BILL-generated ID or UUID of the budget linked with the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetId")]
    public string? BudgetId { get; init; }

    /// <summary>
    /// Card spend limit for the current budget period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availableFunds")]
    public double? AvailableFunds { get; init; }

    /// <summary>
    /// Card spend limit for all future budget periods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    /// <summary>
    /// User-generated expiration date. The value is in the <c>yyyy-MM-dd</c> format. BILL automatically closes the card account on this date. To remove the card expiration date, set this field as <c>null</c>.
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

    /// <summary>
    /// Card policy for recurring budget periods.
    /// * <c>true</c>: Renew the card funds in the next budget period
    /// * <c>false</c>: Card is available only for the current budget period
    /// <para>
    /// If you do not set this field, the card will retain its current policy.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring")]
    public bool? Recurring { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
