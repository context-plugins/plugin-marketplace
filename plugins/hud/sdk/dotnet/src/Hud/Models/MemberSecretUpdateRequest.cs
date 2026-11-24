using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record MemberSecretUpdateRequest
{
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
