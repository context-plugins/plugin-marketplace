using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Resolved source groups response.
/// </summary>
public record SourceGroupResolveResult
{
    /// <summary>
    /// Resolved source groups.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SourceGroupDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
