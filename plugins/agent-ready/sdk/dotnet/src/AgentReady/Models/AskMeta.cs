using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// NLWeb response envelope metadata.
/// </summary>
public record AskMeta
{
    [JsonPropertyName("response_type")]
    public required ResponseType ResponseType { get; init; }

    [JsonPropertyName("version")]
    public string Version { get; } = "0.55";

    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
