using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// URL inspection results.
/// </summary>
public record UrlInspectionResult1
{
    /// <summary>
    /// Link to Search Console URL inspection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inspectionResultLink")]
    public string? InspectionResultLink { get; init; }

    /// <summary>
    /// Result of the index status analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indexStatusResult")]
    public IndexStatusInspectionResult2? IndexStatusResult { get; init; }

    /// <summary>
    /// Result of the AMP analysis. Absent if the page is not an AMP page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ampResult")]
    public AmpInspectionResult2? AmpResult { get; init; }

    /// <summary>
    /// Result of the Mobile usability analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobileUsabilityResult")]
    public MobileUsabilityInspectionResult1? MobileUsabilityResult { get; init; }

    /// <summary>
    /// Result of the Rich Results analysis. Absent if there are no rich results found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("richResultsResult")]
    public RichResultsInspectionResult2? RichResultsResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
