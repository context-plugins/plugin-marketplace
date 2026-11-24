using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarBatchRequest
{
    [JsonPropertyName("registry_id")]
    public required Guid RegistryId { get; init; }

    [JsonPropertyName("variables")]
    public required IReadOnlyList<RegistryEnvVarBatchItem> Variables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
