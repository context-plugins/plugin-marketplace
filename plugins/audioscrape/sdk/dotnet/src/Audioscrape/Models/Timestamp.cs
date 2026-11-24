using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record Timestamp
{
    [JsonPropertyName("end")]
    public required double End { get; init; }

    [JsonPropertyName("start")]
    public required double Start { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
