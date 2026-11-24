using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A SCIM 2.0 ListResponse container for multi-resource responses.
/// </summary>
public record ScimListResponse
{
    /// <summary>
    /// SCIM schema URNs identifying this as a ListResponse.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemas")]
    public IReadOnlyList<string>? Schemas { get; init; }

    /// <summary>
    /// Total number of resources matching the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalResults")]
    public int? TotalResults { get; init; }

    /// <summary>
    /// 1-based index of the first result in this page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startIndex")]
    public int? StartIndex { get; init; }

    /// <summary>
    /// Number of results returned in this response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemsPerPage")]
    public int? ItemsPerPage { get; init; }

    /// <summary>
    /// Array of SCIM resource objects (Users or Groups).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Resources")]
    public IReadOnlyList<object>? Resources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
