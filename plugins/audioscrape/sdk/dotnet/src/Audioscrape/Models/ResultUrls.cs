using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record ResultUrls
{
    [JsonPropertyName("episode")]
    public required string Episode { get; init; }

    [JsonPropertyName("segment")]
    public required string Segment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
