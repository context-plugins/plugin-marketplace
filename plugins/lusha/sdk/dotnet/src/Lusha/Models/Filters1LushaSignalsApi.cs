using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Filters1LushaSignalsApi
{
    /// <summary>
    /// Optional sub-filters to narrow results within a signal type.
    /// - Multi-value filters use <b>OR</b> logic
    /// - Filter values are <b>not</b> case-sensitive
    /// - <c>state</c> without <c>country</c> in <c>hiringByLocations</c> returns HTTP <b>400</b>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public CompanySignalFiltersInclude? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
