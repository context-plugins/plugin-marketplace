using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record CreateBalanceAdjustment
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3 letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public string Currency { get; } = "USD";

    /// <summary>
    /// A description of the <c>Balance Adjustment</c>.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Pass any randomly generated or internal ID to <see href="/api/section/idempotent-requests">idempotently</see> identify the <c>Balance Adjustment</c>. Must be unique per application and no more than 255 characters. If a <c>Balance Adjustment</c> already exists with the same <c>idempotency_id</c>, the request is rejected with a <c>422</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotency_id")]
    [MaxLength(255)]
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// The account, card, or bank account that is credited or debited as part of the adjustment.
    /// </summary>
    [JsonPropertyName("instrument_id")]
    public required string InstrumentId { get; init; }

    /// <summary>
    /// The payment processing entity responsible for handling transactions, fund movements, etc., between different financial accounts.
    /// </summary>
    [JsonPropertyName("processor")]
    public string Processor { get; } = "DUMMY_V1";

    /// <summary>
    /// The method of adjustment.
    /// </summary>
    [JsonPropertyName("rail")]
    public string Rail { get; } = "ACH";

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// The ID of the top-up configuration that created the adjustment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_up_config_id")]
    public string? TopUpConfigId { get; init; }

    /// <summary>
    /// Specifies whether the <c>Balance Adjustment</c> increases or decreases the account balance.
    /// <para>
    /// Acceptable values:
    /// - <c>TOP_UP</c> - Adds funds to the balance (e.g., a deposit or manual funding).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type6? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
