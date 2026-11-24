using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record ServiceQuotaList
{
    /// <summary>
    /// Service quotas in this page.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<ServiceQuota> Items { get; init; }

    /// <summary>
    /// Opaque token for the next page. Omitted when there are no more results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Total number of results after filtering and before pagination.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
