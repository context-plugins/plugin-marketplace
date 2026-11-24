using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record FullDurationSongClip
{
    /// <summary>
    /// Track preview URL (valid for six hours).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preview_url")]
    [Format(FormatKind.Uri)]
    public string? PreviewUrl { get; init; }

    /// <summary>
    /// Track duration in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public int? Duration { get; init; }

    /// <summary>
    /// Track clip ID that can be used as music_sound_id in publish endpoint.
    /// </summary>
    [JsonPropertyName("song_clip_id")]
    public required string SongClipId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
