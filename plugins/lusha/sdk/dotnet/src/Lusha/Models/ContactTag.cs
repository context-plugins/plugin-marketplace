using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactTag
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("color")]
    public required string Color { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
