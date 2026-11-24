using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Advanced query request with structured filter conditions
/// </summary>
public record EntityQueryRequest
{
    /// <summary>
    /// A group of filter conditions joined by a logical operator
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterGroup")]
    public FilterGroup? FilterGroup { get; init; }

    /// <summary>
    /// List of field names to include in the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedFields")]
    public IReadOnlyList<string>? SelectedFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderBy")]
    public IReadOnlyList<OrderByClause>? OrderBy { get; init; }

    /// <summary>
    /// Zero-based offset for pagination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    [Minimum(0)]
    public int? Start { get; init; }

    /// <summary>
    /// Maximum number of records to return
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(1000)]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
