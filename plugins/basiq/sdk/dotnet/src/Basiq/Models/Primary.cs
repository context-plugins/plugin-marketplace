using System.Text.Json.Serialization;

namespace Basiq.Models;

public record Primary
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }
}
