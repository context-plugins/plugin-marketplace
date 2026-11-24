using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record RequestInstagramGraphMediaApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment_enabled")]
    public bool? CommentEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("access_token")]
    public string? AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
