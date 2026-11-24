using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Tiktok
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type3? Type { get; init; } = Type3.Video;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadIds")]
    public IReadOnlyList<string>? UploadIds { get; init; }

    /// <summary>
    /// The URL to image uploaded on bundle.social.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    public string? Thumbnail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privacy")]
    public Privacy? Privacy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("photoCoverIndex")]
    [Minimum(0)]
    public int? PhotoCoverIndex { get; init; } = 0;

    /// <summary>
    /// Set to true if the video is a paid partnership to promote a third-party business.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isBrandContent")]
    public bool? IsBrandContent { get; init; } = false;

    /// <summary>
    /// Set to true if this video is promoting the creator's own business.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isOrganicBrandContent")]
    public bool? IsOrganicBrandContent { get; init; } = false;

    /// <summary>
    /// If set to true, other TikTok users will not be allowed to make comments on this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableComments")]
    public bool? DisableComments { get; init; } = false;

    /// <summary>
    /// If set to true, other TikTok users will not be allowed to make Stitches using this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableDuet")]
    public bool? DisableDuet { get; init; } = false;

    /// <summary>
    /// If set to true, other TikTok users will not be allowed to make Duets using this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableStitch")]
    public bool? DisableStitch { get; init; } = false;

    /// <summary>
    /// Choose a frame of the published video as the cover photo in ms
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnailOffset")]
    public double? ThumbnailOffset { get; init; } = 0d;

    /// <summary>
    /// Set to true if this video is AI generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isAiGenerated")]
    public bool? IsAiGenerated { get; init; } = false;

    /// <summary>
    /// If set to true, TikTok will automatically add music to the photos.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoAddMusic")]
    public bool? AutoAddMusic { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoScale")]
    public bool? AutoScale { get; init; } = false;

    /// <summary>
    /// If set to true, upload post as draft.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadToDraft")]
    public bool? UploadToDraft { get; init; } = false;

    /// <summary>
    /// Information about the commercial sound (track) used for TikTok publishing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundInfo")]
    public MusicSoundInfo1? MusicSoundInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
