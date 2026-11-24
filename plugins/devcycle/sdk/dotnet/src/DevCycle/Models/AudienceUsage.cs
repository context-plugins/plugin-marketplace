using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AudienceUsage
{
    [JsonPropertyName("features")]
    public required IReadOnlyList<AudienceFeature> Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
