using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the currency code of min_compensation.
/// </summary>
public record Money4
{
    /// <summary>
    /// The whole units of the amount. For example if <c>currencyCode</c> is <c>"USD"</c>, then 1 unit is one US dollar.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("units")]
    public string? Units { get; init; }

    /// <summary>
    /// The three-letter currency code defined in ISO 4217.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If <c>units</c> is positive, <c>nanos</c> must be positive or zero. If <c>units</c> is zero, <c>nanos</c> can be positive, zero, or negative. If <c>units</c> is negative, <c>nanos</c> must be negative or zero. For example $-1.75 is represented as <c>units</c>=-1 and <c>nanos</c>=-750,000,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nanos")]
    public int? Nanos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
