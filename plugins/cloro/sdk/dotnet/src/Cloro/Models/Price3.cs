using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Product price for <c>type: SHOPPING_CARD</c> ads. <c>currency</c> and <c>raw</c> are always present; <c>value</c> is omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. <c>raw</c> carries the visible text verbatim (e.g. <c>"$0 down with 24 monthly payments"</c> on installment offers) so consumers can disambiguate genuine zero prices from down-payment labels.
/// </summary>
public record Price3
{
    /// <summary>
    /// Numeric price value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Currency symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Visible price text verbatim
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public string? Raw { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
