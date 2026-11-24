using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// A set of <c>dimension</c> value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
/// </summary>
public record ApiDimensionFilterGroup
{
    /// <summary>
    /// Optional. The logic operator between filters of the same group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupType")]
    public GroupType? GroupType { get; init; }

    /// <summary>
    /// Optional. A list of single-value filters in this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<ApiDimensionFilter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
