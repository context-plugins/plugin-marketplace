using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Used to convert a dimension value to a single case.
/// </summary>
public record CaseExpression
{
    /// <summary>
    /// Name of a dimension. The name must refer back to a name in dimensions field of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionName")]
    public string? DimensionName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
