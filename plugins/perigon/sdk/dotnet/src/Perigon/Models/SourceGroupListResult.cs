using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of source groups.
/// </summary>
public record SourceGroupListResult
{
    /// <summary>
    /// Total number of matching source groups across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Source groups returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SourceGroupDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
