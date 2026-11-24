using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

public record Error1
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
