using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// To express that the result needs to be between two numbers (inclusive).
/// </summary>
public record BetweenFilter
{
    /// <summary>
    /// Ends with this number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toValue")]
    public NumericValue4? ToValue { get; init; }

    /// <summary>
    /// Begins with this number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromValue")]
    public NumericValue1? FromValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
