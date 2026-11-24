using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

public record Error2
{
    [JsonPropertyName("code")]
    public required Code Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
