using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record Links
{
    [JsonPropertyName("first")]
    public required string? First { get; init; }

    [JsonPropertyName("last")]
    public required string? Last { get; init; }

    [JsonPropertyName("prev")]
    public required string? Prev { get; init; }

    [JsonPropertyName("next")]
    public required string? Next { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
