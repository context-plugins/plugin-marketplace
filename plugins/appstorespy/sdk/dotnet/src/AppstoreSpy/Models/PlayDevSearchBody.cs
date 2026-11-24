using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Models;

public record PlayDevSearchBody
{
    /// <summary>
    /// Count of developers in results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; } = 10;

    /// <summary>
    /// Offset page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public int? Page { get; init; } = 1;

    /// <summary>
    /// Field for sort, prefix with - for descending
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public DevSortEnum? Sort { get; init; }

    /// <summary>
    /// Fields for select, empty for all
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<string>? Fields { get; init; }

    [JsonPropertyName("filter")]
    public required SearchFilterDevPlay Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
