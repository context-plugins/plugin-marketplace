using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowListResponse
{
    /// <summary>
    /// List of CloudFlows.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<Cloudflow> Items { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. <c>null</c> when there are no more CloudFlows.
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
