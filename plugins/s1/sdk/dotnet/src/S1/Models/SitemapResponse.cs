using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record SitemapResponse
{
    [JsonPropertyName("links")]
    public required IReadOnlyList<string> Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
