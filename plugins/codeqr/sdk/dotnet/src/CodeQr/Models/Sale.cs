using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record Sale
{
    /// <summary>
    /// The amount of the sale in the smallest unit of <c>currency</c> — cents for two-decimal currencies, the full integer for zero-decimal ones (e.g. <c>1437</c> JPY), thousandths for three-decimal ones (e.g. <c>1437</c> KWD fils).
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(0)]
    public required int Amount { get; init; }

    /// <summary>
    /// The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID.
    /// </summary>
    [JsonPropertyName("invoiceId")]
    public required string? InvoiceId { get; init; }

    /// <summary>
    /// The payment processor via which the sale was made.
    /// </summary>
    [JsonPropertyName("paymentProcessor")]
    public PaymentProcessor PaymentProcessor { get; init; } = PaymentProcessor.Custom;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
