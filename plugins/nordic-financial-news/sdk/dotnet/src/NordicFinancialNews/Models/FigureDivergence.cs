using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

/// <summary>
/// Detail behind <c>member_figures_disagree</c>: the specific metrics whose values disagree across member articles, with the per-source figures and range. Null when there is no disagreement; omitted on a tombstone.
/// </summary>
public record FigureDivergence
{
    /// <summary>
    /// One entry per disagreeing metric.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groups")]
    public IReadOnlyList<Group>? Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
