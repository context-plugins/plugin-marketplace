using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarCheckResponse
{
    [JsonPropertyName("environments")]
    public required IReadOnlyList<RegistryEnvVarCheckItem> Environments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
