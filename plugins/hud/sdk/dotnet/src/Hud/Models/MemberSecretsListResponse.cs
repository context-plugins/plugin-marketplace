using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record MemberSecretsListResponse
{
    [JsonPropertyName("secrets")]
    public required IReadOnlyList<MemberSecretItem> Secrets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
