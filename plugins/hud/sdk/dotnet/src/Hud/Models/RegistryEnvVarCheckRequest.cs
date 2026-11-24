using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarCheckRequest
{
    [JsonPropertyName("registry_ids")]
    public required IReadOnlyList<Guid> RegistryIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
