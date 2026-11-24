using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UnprocessableError
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
