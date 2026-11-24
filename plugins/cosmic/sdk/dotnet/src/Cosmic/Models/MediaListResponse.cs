using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record MediaListResponse
{
    [JsonPropertyName("media")]
    public required IReadOnlyList<Media> Media { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
