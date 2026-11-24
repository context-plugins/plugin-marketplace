using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Cursor-paginated list of CloudFlow connections.
/// </summary>
public record CloudflowConnectionListResponse
{
    /// <summary>
    /// List of connections for the current page.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<CloudflowConnection> Items { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. <c>null</c> when there are no more results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Always <c>null</c>. Row count is not computed for this endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
