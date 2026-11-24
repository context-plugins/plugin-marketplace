using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A SCIM 2.0 ListResponse containing group resources.
/// </summary>
public record ScimGroupListResponse
{
    [JsonPropertyName("schemas")]
    public required IReadOnlyList<string> Schemas { get; init; }

    /// <summary>
    /// The total number of results matching the query.
    /// </summary>
    [JsonPropertyName("totalResults")]
    public required int TotalResults { get; init; }

    /// <summary>
    /// The number of results returned in this page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemsPerPage")]
    public int? ItemsPerPage { get; init; }

    /// <summary>
    /// The 1-based index of the first result in this page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startIndex")]
    public int? StartIndex { get; init; }

    /// <summary>
    /// The list of SCIM group resources.
    /// </summary>
    [JsonPropertyName("Resources")]
    public required IReadOnlyList<ScimGroup> Resources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
