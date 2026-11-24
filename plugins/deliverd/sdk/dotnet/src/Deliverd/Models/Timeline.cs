using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Timeline
{
    [JsonPropertyName("event")]
    public required string Event { get; init; }

    [JsonPropertyName("actor")]
    public required string Actor { get; init; }

    [JsonPropertyName("actorType")]
    public required string ActorType { get; init; }

    [JsonPropertyName("resourceType")]
    public required string? ResourceType { get; init; }

    [JsonPropertyName("resourceId")]
    public required string? ResourceId { get; init; }

    [JsonPropertyName("at")]
    public required string At { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
