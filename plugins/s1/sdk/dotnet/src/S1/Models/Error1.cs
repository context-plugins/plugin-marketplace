using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record Error1
{
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
