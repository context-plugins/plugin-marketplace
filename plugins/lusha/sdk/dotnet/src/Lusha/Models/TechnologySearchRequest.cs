using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record TechnologySearchRequest
{
    /// <summary>
    /// Search text for technology
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
