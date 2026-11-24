using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Index-Status inspection response.
/// </summary>
public record InspectUrlIndexResponse
{
    /// <summary>
    /// URL inspection results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inspectionResult")]
    public UrlInspectionResult1? InspectionResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
