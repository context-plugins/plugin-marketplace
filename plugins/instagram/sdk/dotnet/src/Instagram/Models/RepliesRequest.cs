using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record RepliesRequest
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
