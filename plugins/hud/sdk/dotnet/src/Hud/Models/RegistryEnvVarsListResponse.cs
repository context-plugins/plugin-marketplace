using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarsListResponse
{
    [JsonPropertyName("variables")]
    public required IReadOnlyList<RegistryEnvVarItem> Variables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
