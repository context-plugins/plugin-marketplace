using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Defines an individual comparison. Most requests will include multiple comparisons so that the report compares between the comparisons.
/// </summary>
public record ComparisonModel
{
    /// <summary>
    /// A basic comparison.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public FilterExpression3? DimensionFilter { get; init; }

    /// <summary>
    /// A saved comparison identified by the comparison's resource name. For example, 'comparisons/1234'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comparison")]
    public string? Comparison { get; init; }

    /// <summary>
    /// Each comparison produces separate rows in the response. In the response, this comparison is identified by this name. If name is unspecified, we will use the saved comparisons display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
