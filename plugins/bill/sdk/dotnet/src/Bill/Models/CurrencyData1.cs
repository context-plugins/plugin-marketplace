using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record CurrencyData1
{
    /// <summary>
    /// Exchange rate for currency conversion
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRate")]
    public double? ExchangeRate { get; init; }

    /// <summary>
    /// Number of decimal places in the currency format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exponent")]
    public long? Exponent { get; init; }

    /// <summary>
    /// Transaction amount in the original currency before conversion
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalCurrencyAmount")]
    public string? OriginalCurrencyAmount { get; init; }

    /// <summary>
    /// Three-letter ISO currency code of the original currency
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalCurrencyCode")]
    public string? OriginalCurrencyCode { get; init; }

    /// <summary>
    /// Currency symbol for display purposes (e.g. $, €, £)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("symbol")]
    public string? Symbol { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
