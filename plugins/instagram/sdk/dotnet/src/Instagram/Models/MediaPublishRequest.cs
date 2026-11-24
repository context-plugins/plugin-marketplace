using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record MediaPublishRequest
{
    /// <summary>
    /// The container ID from createMediaContainer.
    /// </summary>
    [JsonPropertyName("creation_id")]
    public required string CreationId { get; init; }

    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
