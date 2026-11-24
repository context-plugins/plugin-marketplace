using System.Text.Json.Serialization;

namespace Cubic.Models;

public record Detail
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
