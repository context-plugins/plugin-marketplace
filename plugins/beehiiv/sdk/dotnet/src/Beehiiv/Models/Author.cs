using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Author
{
    /// <summary>
    /// The prefixed ID of the author (e.g. <c>guest_xxx</c> for guest authors, <c>user_xxx</c> for users).
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The author type.
    /// </summary>
    [JsonPropertyName("type")]
    public required AuthorType2 Type { get; init; }

    /// <summary>
    /// The author display name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The biography text for the author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bio")]
    public string? Bio { get; init; }

    /// <summary>
    /// The profile image URL for the author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bio_image_url")]
    public string? BioImageUrl { get; init; }

    [JsonPropertyName("social_media_links")]
    public required AuthorSocialMediaLinks SocialMediaLinks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
