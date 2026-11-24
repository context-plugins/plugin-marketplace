using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Cursor-paginated list of CloudFlow templates.
/// </summary>
public record CloudflowTemplateListResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<CloudflowTemplate> Items { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. <c>null</c> when there are no more results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Total number of templates matching the current query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
