using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

/// <summary>
/// Information about the commercial sound (track) used for TikTok publishing.
/// </summary>
public record MusicSoundInfo1
{
    /// <summary>
    /// Use song_clip_id from CML trending list (full_duration_song_clip or trending_song_clip).
    /// </summary>
    [JsonPropertyName("musicSoundId")]
    [MinLength(1)]
    public required string MusicSoundId { get; init; }

    /// <summary>
    /// Commercial sound volume (0-100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundVolume")]
    [Minimum(0)]
    [Maximum(100)]
    public int? MusicSoundVolume { get; init; }

    /// <summary>
    /// Starting point of the commercial sound in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundStart")]
    [Minimum(0)]
    public int? MusicSoundStart { get; init; }

    /// <summary>
    /// Ending point of the commercial sound in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundEnd")]
    [Minimum(0)]
    public int? MusicSoundEnd { get; init; }

    /// <summary>
    /// Background volume of the original video sound (0-100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videoOriginalSoundVolume")]
    [Minimum(0)]
    [Maximum(100)]
    public int? VideoOriginalSoundVolume { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
