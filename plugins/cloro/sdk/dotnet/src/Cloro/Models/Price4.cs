using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Product price (present when <c>type</c> is <c>SHOPPING</c>). <c>currency</c> and <c>raw</c> are always present; <c>value</c> is omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. <c>raw</c> carries the visible text verbatim.
/// </summary>
public record Price4
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
