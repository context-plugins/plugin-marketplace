using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record AdCreativeCreate
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Story specification including page, link, and media data
    /// </summary>
    [JsonPropertyName("object_story_spec")]
    public required object ObjectStorySpec { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("call_to_action_type")]
    public CallToActionType? CallToActionType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url_tags")]
    public string? UrlTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
