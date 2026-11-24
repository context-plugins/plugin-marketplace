using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Context
{
    [JsonPropertyName("file")]
    public required string? File { get; init; }

    [JsonPropertyName("excerpt")]
    public required string Excerpt { get; init; }

    [JsonPropertyName("contextFromVersion")]
    public required double? ContextFromVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
