using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record VercelEdgeConfigConnection
{
    [JsonPropertyName("edgeConfigName")]
    public required string EdgeConfigName { get; init; }

    [JsonPropertyName("configurationId")]
    public required string ConfigurationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
