using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarCheckItem
{
    [JsonPropertyName("registry_id")]
    public required Guid RegistryId { get; init; }

    [JsonPropertyName("required_vars")]
    public required IReadOnlyList<string> RequiredVars { get; init; }

    [JsonPropertyName("configured_vars")]
    public required IReadOnlyList<string> ConfiguredVars { get; init; }

    [JsonPropertyName("missing_vars")]
    public required IReadOnlyList<string> MissingVars { get; init; }

    [JsonPropertyName("is_complete")]
    public required bool IsComplete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
