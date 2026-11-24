using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UserCustomFilter
{
    /// <summary>
    /// Comparator to use
    /// </summary>
    [JsonPropertyName("comparator")]
    public required Comparator4 Comparator { get; init; }

    /// <summary>
    /// Data Key used for custom data
    /// </summary>
    [JsonPropertyName("dataKey")]
    [MinLength(1)]
    public required string DataKey { get; init; }

    /// <summary>
    /// Data Key Type used for custom data
    /// </summary>
    [JsonPropertyName("dataKeyType")]
    public required DataKeyType DataKeyType { get; init; }

    /// <summary>
    /// An array of values is required for all filters except when the comparator is 'exist' or '!exist'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public object? Values { get; init; }

    /// <summary>
    /// Filter type of this audience
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "user";

    /// <summary>
    /// Sub type of this filter
    /// </summary>
    [JsonPropertyName("subType")]
    public string SubType { get; } = "customData";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
