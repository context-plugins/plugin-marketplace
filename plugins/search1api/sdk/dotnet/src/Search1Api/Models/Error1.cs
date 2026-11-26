using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record Error1
{
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
