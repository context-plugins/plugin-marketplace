using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record PaginatedResponseActionItem
{
    /// <summary>
    /// Information about a page returned in a paginated response.
    /// </summary>
    [JsonPropertyName("page_info")]
    public required PageInfo PageInfo { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<ActionItem> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
