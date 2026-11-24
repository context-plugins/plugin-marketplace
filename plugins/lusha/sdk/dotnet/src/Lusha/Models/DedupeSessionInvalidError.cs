using System.Text.Json.Serialization;

namespace Lusha.Models;

public record DedupeSessionInvalidError
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
