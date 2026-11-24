using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiRcaAffectedResourceDto
{
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<PublicApiRcaMetricDto>? Metrics { get; init; }

    [JsonPropertyName("resource")]
    public required PublicApiRcaResourceRefDto Resource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
