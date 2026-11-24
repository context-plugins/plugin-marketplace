using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UpdateOverrideDto
{
    [JsonPropertyName("environment")]
    public required string Environment { get; init; }

    [JsonPropertyName("variation")]
    public required string Variation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
