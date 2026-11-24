using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record CreditCard
{
    /// <summary>
    /// The minimum payment amount due for the next card payment.
    /// </summary>
    [JsonPropertyName("minPaymentAmount")]
    public required string MinPaymentAmount { get; init; }

    /// <summary>
    /// The amount due for the next card payment.
    /// </summary>
    [JsonPropertyName("paymentDueAmount")]
    public required string PaymentDueAmount { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentCurrency")]
    public string? PaymentCurrency { get; init; }

    /// <summary>
    /// Date that the next payment for the card is due.
    /// </summary>
    [JsonPropertyName("paymentDueDate")]
    public required string PaymentDueDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
