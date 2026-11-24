using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Env identity from the control channel's <c>hello</c> reply.
/// </summary>
public record ManifestEnv
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; } = "0.0.0";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
