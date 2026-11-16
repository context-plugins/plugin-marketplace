using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record Embedded11
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gateway_integrations")]
    [UniqueItems]
    public IReadOnlyList<GatewayIntegrationObject>? GatewayIntegrations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
