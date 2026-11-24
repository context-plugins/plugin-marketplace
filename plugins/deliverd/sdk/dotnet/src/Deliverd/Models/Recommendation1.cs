using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Recommendation1
{
    [JsonPropertyName("verdict")]
    public required Verdict1 Verdict { get; init; }

    [JsonPropertyName("summary")]
    public required string? Summary { get; init; }

    [JsonPropertyName("confidence")]
    public required double? Confidence { get; init; }

    [JsonPropertyName("rationale")]
    public required string? Rationale { get; init; }

    [JsonPropertyName("source")]
    public required string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
