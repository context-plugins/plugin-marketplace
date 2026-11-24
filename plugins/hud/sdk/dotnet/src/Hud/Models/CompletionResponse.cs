using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record CompletionResponse
{
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
