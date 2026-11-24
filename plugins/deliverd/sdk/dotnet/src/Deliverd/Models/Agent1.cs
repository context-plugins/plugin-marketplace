using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Agent1
{
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("provider")]
    public required string? Provider { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
