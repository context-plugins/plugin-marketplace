using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record McpLock
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tools")]
    public IReadOnlyList<Tool>? Tools { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompts")]
    public IReadOnlyList<Prompt>? Prompts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resources")]
    public IReadOnlyList<Resource>? Resources { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transport")]
    public Transport? Transport { get; init; } = Transport.Http;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
