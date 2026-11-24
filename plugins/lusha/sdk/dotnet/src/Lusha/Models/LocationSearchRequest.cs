using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LocationSearchRequest
{
    /// <summary>
    /// Search text for location
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
