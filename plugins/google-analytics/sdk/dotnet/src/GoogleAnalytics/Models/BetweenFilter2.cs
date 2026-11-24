using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A filter for two values.
/// </summary>
public record BetweenFilter2
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
