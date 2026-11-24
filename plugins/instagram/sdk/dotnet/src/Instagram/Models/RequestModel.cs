using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record RequestModel
{
    /// <summary>
    /// True to hide, false to unhide.
    /// </summary>
    [JsonPropertyName("hide")]
    public required bool Hide { get; init; }

    [JsonPropertyName("access_token")]
    public required string AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
