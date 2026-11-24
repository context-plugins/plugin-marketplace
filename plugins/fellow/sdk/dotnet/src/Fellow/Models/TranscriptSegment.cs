using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record TranscriptSegment
{
    [JsonPropertyName("start")]
    public required double Start { get; init; }

    [JsonPropertyName("end")]
    public required double End { get; init; }

    [JsonPropertyName("speaker")]
    public required string? Speaker { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
