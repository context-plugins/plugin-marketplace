using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
/// </summary>
public record DimensionExpression
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
