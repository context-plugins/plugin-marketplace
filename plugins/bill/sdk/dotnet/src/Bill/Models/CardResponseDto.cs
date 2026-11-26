using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Cards response.
/// </summary>
public record CardResponseDto
{
    /// <summary>
    /// BILL-generated ID of the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated UUID of the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Card name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// BILL-generated ID of the user linked with the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the user linked with the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userUuid")]
    public string? UserUuid { get; init; }

    /// <summary>
    /// BILL-generated ID of the budget linked with the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetId")]
    public string? BudgetId { get; init; }

    /// <summary>
    /// BILL-generated UUID of the budget linked with the card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budgetUuid")]
    public string? BudgetUuid { get; init; }

    /// <summary>
    /// Last four digits of the card number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastFour")]
    public string? LastFour { get; init; }

    /// <summary>
    /// BILL-generated card expiration date. The value is in the <c>MM/YY</c> format.
    /// <para>
    /// <b>Note</b>: Use the <c>validThru</c> value as the expiration date in a card payment. Do not use the <c>expirationDate</c> value for this operation.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validThru")]
    public string? ValidThru { get; init; }

    /// <summary>
    /// User-generated card expiration date. This value is in the <c>yyyy-MM-dd</c> format. BILL automatically closes the card account on this date.
    /// <para>
    /// <b>Note</b>: Use the <c>validThru</c> value as the expiration date in a card payment. Do not use the <c>expirationDate</c> value for this operation.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationDate")]
    public DateTimeOffset? ExpirationDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public CardStatus? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletedReason")]
    public DeletedReasonType? DeletedReason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public CardType? Type { get; init; }

    /// <summary>
    /// Set as <c>true</c> to share all the budget funds with the card. This option enables the card user to spend from unallocated budget funds when the allocation is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareBudgetFunds")]
    public bool? ShareBudgetFunds { get; init; }

    /// <summary>
    /// Set as <c>true</c> to renew the card funds in the next budget period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurring")]
    public bool? Recurring { get; init; }

    /// <summary>
    /// Card spend limit for the all future budget periods
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringLimit")]
    public double? RecurringLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentPeriod")]
    public CurrentPeriodBillV3CardsApi? CurrentPeriod { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
