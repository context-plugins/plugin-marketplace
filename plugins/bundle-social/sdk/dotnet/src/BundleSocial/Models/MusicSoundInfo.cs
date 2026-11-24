using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

/// <summary>
/// Information about the Instagram audio asset used for Reels publishing.
/// </summary>
public record MusicSoundInfo
{
    /// <summary>
    /// Use audio_id from Instagram Audio API search endpoint.
    /// </summary>
    [JsonPropertyName("musicSoundId")]
    [MinLength(1)]
    public required string MusicSoundId { get; init; }

    /// <summary>
    /// Audio volume (0-100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("musicSoundVolume")]
    [Minimum(0)]
    [Maximum(100)]
    public int? MusicSoundVolume { get; init; }

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
