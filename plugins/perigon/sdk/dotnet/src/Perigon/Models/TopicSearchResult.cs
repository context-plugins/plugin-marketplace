using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Topic search result
/// </summary>
public record TopicSearchResult
{
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<TopicDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
