using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Request fields to perform an <see href="/guides/after-the-payment/refunds#unreferenced-refunds">unreferenced refund</see>.
/// </summary>
public record TransferCardPresentUnreferencedRefund
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
    /// The ID of the <c>Device</c> the <c>Transfer</c> was created under.
    /// </summary>
    [JsonPropertyName("device")]
    public required string Device { get; init; }

    /// <summary>
    /// Provide the operation key for an <see href="/guides/after-the-payment/refunds#unreferenced-refunds">unreferenced refund</see>.
    /// </summary>
    [JsonPropertyName("operation_key")]
    public string OperationKey { get; } = "CARD_PRESENT_UNREFERENCED_REFUND";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
