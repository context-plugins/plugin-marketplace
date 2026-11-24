using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AgentAttribute
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonPropertyName("pricing")]
    public required Pricing Pricing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
