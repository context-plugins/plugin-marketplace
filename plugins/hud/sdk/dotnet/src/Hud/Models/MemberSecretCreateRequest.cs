using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record MemberSecretCreateRequest
{
    /// <summary>
    /// Environment variable name. Lowercase letters are uppercased and hyphens become underscores; all other characters are rejected.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
