using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Money
{
    /// <summary>
    /// Decimal monetary amount at ISO 4217 minor-unit precision (string).
    /// </summary>
    [JsonPropertyName("amount")]
    [RegularExpression("^-?(0|[1-9]\\d*)(\\.\\d+)?$")]
    public required string Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    [RegularExpression("^[A-Z]{3}$")]
    public required string Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
