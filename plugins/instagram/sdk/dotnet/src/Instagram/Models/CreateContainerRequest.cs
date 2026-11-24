using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instagram.Core.Models;
using Instagram.Models.Enums;

namespace Instagram.Models;

public record CreateContainerRequest
{
    /// <summary>
    /// Public URL of the image to publish.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Public URL of the video to publish.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("video_url")]
    public string? VideoUrl { get; init; }

    /// <summary>
    /// Caption text for the media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caption")]
    public string? Caption { get; init; }

    /// <summary>
    /// Type of media to publish.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media_type")]
    public MediaTypeInstagramGraphPublishingApi? MediaType { get; init; }

    /// <summary>
    /// Set to true if this is an item in a carousel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_carousel_item")]
    public bool? IsCarouselItem { get; init; }

    /// <summary>
    /// Facebook Page ID of a location to tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location_id")]
    public string? LocationId { get; init; }

    /// <summary>
    /// Users to tag in the media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_tags")]
    public IReadOnlyList<UserTag>? UserTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("access_token")]
    public string? AccessToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
