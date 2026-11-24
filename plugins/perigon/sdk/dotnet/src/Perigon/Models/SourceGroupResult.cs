using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Single source group response.
/// </summary>
public record SourceGroupResult
{
    /// <summary>
    /// Named group of news source domains for filtering search and monitors.
    /// </summary>
    [JsonPropertyName("data")]
    public required SourceGroupDto Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
