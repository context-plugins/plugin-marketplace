using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Instagram
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; } = Type1.Post;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadIds")]
    public IReadOnlyList<string>? UploadIds { get; init; }

    /// <summary>
    /// Alternative text for a single image post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("altText")]
    public string? AltText { get; init; }

    /// <summary>
    /// Choose a frame of the published video as the cover photo in ms
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnailOffset")]
    public double? ThumbnailOffset { get; init; } = 0d;

    /// <summary>
    /// The URL to image uploaded on bundle.social.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// For Reels only.When true, indicates that the reel can appear in both the Feed and Reels tabs.When false, indicates the reel can only appear in the Reels tab.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shareToFeed")]
    public bool? ShareToFeed { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborators")]
    public IReadOnlyList<string>? Collaborators { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoFitImage")]
    public bool? AutoFitImage { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoCropImage")]
    public bool? AutoCropImage { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagged")]
    public IReadOnlyList<Tagged>? Tagged { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("carouselItems")]
    public IReadOnlyList<CarouselItem>? CarouselItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationId")]
    public string? LocationId { get; init; }

    /// <summary>
    /// For Reels only. Trial reels are only shared to non-followers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trialParams")]
    public TrialParams? TrialParams { get; init; }

    /// <summary>
    /// Enables the native "Paid partnership" disclosure label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isPaidPartnership")]
    public bool? IsPaidPartnership { get; init; } = false;

    /// <summary>
    /// Up to 2 Instagram usernames of the brands tagged as paid-partnership sponsors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brandedContentSponsors")]
    [MaxLength(2)]
    public IReadOnlyList<string>? BrandedContentSponsors { get; init; }

    /// <summary>
    /// Information about the Instagram audio asset used for Reels publishing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundInfo")]
    public MusicSoundInfo? MusicSoundInfo { get; init; }

    /// <summary>
    /// Set to true if the content was generated or modified by AI. Adds Instagram's AI content label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isAiGenerated")]
    public bool? IsAiGenerated { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
