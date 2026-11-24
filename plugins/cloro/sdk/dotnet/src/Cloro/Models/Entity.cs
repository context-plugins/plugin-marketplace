using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Entity
{
    /// <summary>
    /// Entity type identifier
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Entity name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
