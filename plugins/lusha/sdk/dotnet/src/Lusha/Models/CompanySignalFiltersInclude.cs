using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// Optional sub-filters to narrow results within a signal type.
/// - Multi-value filters use <b>OR</b> logic
/// - Filter values are <b>not</b> case-sensitive
/// - <c>state</c> without <c>country</c> in <c>hiringByLocations</c> returns HTTP <b>400</b>
/// </summary>
public record CompanySignalFiltersInclude
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsEventTypes")]
    public IReadOnlyList<NewsEventType>? NewsEventTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiringByDepartments")]
    public IReadOnlyList<HiringByDepartment>? HiringByDepartments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiringByLocations")]
    public IReadOnlyList<SignalFilterLocation>? HiringByLocations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
