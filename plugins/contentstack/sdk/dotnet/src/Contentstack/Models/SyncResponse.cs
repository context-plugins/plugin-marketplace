using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// The response from a content sync operation, containing the synced items and tokens for subsequent sync requests.
/// </summary>
public record SyncResponse
{
    /// <summary>
    /// Array of sync item objects representing content changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<SyncItem>? Items { get; init; }

    /// <summary>
    /// Token to retrieve the next page of sync results. Present only when more pages are available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paginationToken")]
    public string? PaginationToken { get; init; }

    /// <summary>
    /// Token representing the current sync state. Use this in subsequent sync requests to receive only new changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncToken")]
    public string? SyncToken { get; init; }

    /// <summary>
    /// Total number of items in the sync response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_count")]
    public int? TotalCount { get; init; }

    /// <summary>
    /// Maximum items returned per page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// Number of items skipped in this response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skip")]
    public int? Skip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
