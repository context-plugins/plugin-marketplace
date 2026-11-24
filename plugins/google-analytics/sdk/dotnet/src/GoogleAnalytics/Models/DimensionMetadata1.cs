using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The dimension metadata contains the API name for this compatibility information. The dimension metadata also contains other helpful information like the UI name and description.
/// </summary>
public record DimensionMetadata1
{
    /// <summary>
    /// The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Still usable but deprecated names for this dimension. If populated, this dimension is available by either <c>apiName</c> or one of <c>deprecatedApiNames</c> for a period of time. After the deprecation period, the dimension will be available only by <c>apiName</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecatedApiNames")]
    public IReadOnlyList<string>? DeprecatedApiNames { get; init; }

    /// <summary>
    /// This dimension's name within the Google Analytics user interface. For example, <c>Event name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uiName")]
    public string? UiName { get; init; }

    /// <summary>
    /// True if the dimension is custom to this property. This includes user, event, &amp; item scoped custom dimensions; to learn more about custom dimensions, see https://support.google.com/analytics/answer/14240153. This also include custom channel groups; to learn more about custom channel groups, see https://support.google.com/analytics/answer/13051316.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customDefinition")]
    public bool? CustomDefinition { get; init; }

    /// <summary>
    /// This dimension's name. Useable in <see href="#Dimension">Dimension</see>'s <c>name</c>. For example, <c>eventName</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiName")]
    public string? ApiName { get; init; }

    /// <summary>
    /// Description of how this dimension is used and calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
