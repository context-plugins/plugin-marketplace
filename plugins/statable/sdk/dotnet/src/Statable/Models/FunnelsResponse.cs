using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record FunnelsResponse
{
    [JsonPropertyName("funnels")]
    public required IReadOnlyList<FunnelDefinition> Funnels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
