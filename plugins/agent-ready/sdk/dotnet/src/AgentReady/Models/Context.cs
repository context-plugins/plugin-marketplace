using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

public record Context
{
    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
