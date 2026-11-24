using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// Where it lands. Required when the gate named a destination
/// </summary>
public record Destination13
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
