using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record AuthorizationCardPresent
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Device</c> that the <c>Authorization</c> was created under.
    /// </summary>
    [JsonPropertyName("device")]
    public required string Device { get; init; }

    /// <summary>
    /// The ID of the buyer <c>Identity</c> to run the card present authorization. Finix tokenizes the card associated with the provided <c>Identity</c> and processes the authorization, removing the need to create a blank buyer <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// Details the operation that's performed in the authorization.
    /// </summary>
    [JsonPropertyName("operation_key")]
    public string OperationKey { get; } = "CARD_PRESENT_AUTHORIZATION";

    /// <summary>
    /// If provided the information will be used to generate a receipt if transaction is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_options")]
    public ReceiptOptions? ReceiptOptions { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
