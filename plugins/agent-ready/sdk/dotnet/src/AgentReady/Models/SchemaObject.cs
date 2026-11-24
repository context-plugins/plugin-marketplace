using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Schema.org JSON-LD for a result.
/// </summary>
public record SchemaObject
{
    [JsonPropertyName("@context")]
    public string Context { get; } = "https://schema.org";

    [JsonPropertyName("@type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
