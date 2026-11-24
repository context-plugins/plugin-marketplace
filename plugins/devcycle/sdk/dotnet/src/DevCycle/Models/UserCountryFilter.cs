using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UserCountryFilter
{
    /// <summary>
    /// Sub type of this filter
    /// </summary>
    [JsonPropertyName("subType")]
    public string SubType { get; } = "country";

    /// <summary>
    /// Comparator to use
    /// </summary>
    [JsonPropertyName("comparator")]
    public required Comparator Comparator { get; init; }

    /// <summary>
    /// An array of values is required for all filters except when the comparator is 'exist' or '!exist'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    /// <summary>
    /// Filter type of this audience
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "user";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
