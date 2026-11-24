using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// One dimension can be the result of an expression of multiple dimensions. For example, dimension "country, city": concatenate(country, ", ", city).
/// </summary>
public record DimensionExpression2
{
    /// <summary>
    /// Used to combine dimension values to a single dimension. For example, dimension "country, city": concatenate(country, ", ", city).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("concatenate")]
    public ConcatenateExpression2? Concatenate { get; init; }

    /// <summary>
    /// Used to convert a dimension value to lower case.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lowerCase")]
    public CaseExpression3? LowerCase { get; init; }

    /// <summary>
    /// Used to convert a dimension value to upper case.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upperCase")]
    public CaseExpression1? UpperCase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
