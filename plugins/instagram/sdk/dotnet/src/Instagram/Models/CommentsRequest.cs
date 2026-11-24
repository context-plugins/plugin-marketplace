using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record CommentsRequest
{
    /// <summary>
    /// The comment text.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
