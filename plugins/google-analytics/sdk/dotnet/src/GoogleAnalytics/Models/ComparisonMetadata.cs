using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The metadata for a single comparison.
/// </summary>
public record ComparisonMetadata
{
    /// <summary>
    /// This comparison's resource name. Useable in <see href="#Comparison">Comparison</see>'s <c>comparison</c> field. For example, 'comparisons/1234'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiName")]
    public string? ApiName { get; init; }

    /// <summary>
    /// This comparison's description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// This comparison's name within the Google Analytics user interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uiName")]
    public string? UiName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
