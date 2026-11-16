using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferCardPresent
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
    /// The ID of the activated device.
    /// </summary>
    [JsonPropertyName("device")]
    public required string Device { get; init; }

    /// <summary>
    /// The ID of the buyer <c>Identity</c> to run the card present sale. Finix tokenizes the card associated with the provided <c>Identity</c> and processes the sale, removing the need to create a blank buyer <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// A key indicating that the operation type should be a card-present sale.
    /// </summary>
    [JsonPropertyName("operation_key")]
    public string OperationKey { get; } = "CARD_PRESENT_SALE";

    /// <summary>
    /// If provided the information will be used to generate a receipt if transaction is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt_options")]
    public ReceiptOptions? ReceiptOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
