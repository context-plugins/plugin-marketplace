using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The compatibility for a single dimension.
/// </summary>
public record DimensionCompatibility
{
    /// <summary>
    /// The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compatibility")]
    public Compatibility1? Compatibility { get; init; }

    /// <summary>
    /// The dimension metadata contains the API name for this compatibility information. The dimension metadata also contains other helpful information like the UI name and description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionMetadata")]
    public DimensionMetadata1? DimensionMetadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
