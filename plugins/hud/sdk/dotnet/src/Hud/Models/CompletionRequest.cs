using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;

namespace Hud.Models;

public record CompletionRequest
{
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("messages")]
    public required IReadOnlyList<ChatMessage> Messages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_tokens")]
    [Minimum(1)]
    [Maximum(16384)]
    public int? MaxTokens { get; init; } = 4000;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
