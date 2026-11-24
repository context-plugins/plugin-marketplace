using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record CreateMetricAssociationDto
{
    [JsonPropertyName("metric")]
    public required string Metric { get; init; }

    [JsonPropertyName("feature")]
    public required string Feature { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
