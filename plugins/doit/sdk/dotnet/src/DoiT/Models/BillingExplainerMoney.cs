using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

/// <summary>
/// Monetary value represented as a decimal string and an ISO 4217 currency code.
/// </summary>
public record BillingExplainerMoney
{
    /// <summary>
    /// Decimal amount serialized at the currency's minor-unit precision.
    /// </summary>
    [JsonPropertyName("amount")]
    [StringLength(30, MinimumLength = 1)]
    [RegularExpression("^-?(0|[1-9][0-9]*)(\\.[0-9]+)?$")]
    public required string Amount { get; init; }

    /// <summary>
    /// ISO 4217 three-letter uppercase currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    [StringLength(3, MinimumLength = 3)]
    [RegularExpression("^[A-Z]{3}$")]
    public required string Currency { get; init; }
}
