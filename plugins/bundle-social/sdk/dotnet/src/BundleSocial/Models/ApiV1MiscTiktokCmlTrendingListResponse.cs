using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record ApiV1MiscTiktokCmlTrendingListResponse
{
    /// <summary>
    /// The name of the commercial music track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commercial_music_name")]
    public string? CommercialMusicName { get; init; }

    /// <summary>
    /// Track duration in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public int? Duration { get; init; }

    /// <summary>
    /// Thumbnail image URL for the track.
    /// </summary>
    [JsonPropertyName("thumbnail_url")]
    [Format(FormatKind.Uri)]
    public required string ThumbnailUrl { get; init; }

    /// <summary>
    /// Artist name.
    /// </summary>
    [JsonPropertyName("artist")]
    public required string Artist { get; init; }

    /// <summary>
    /// Track preview URL (valid for six hours).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preview_url")]
    [Format(FormatKind.Uri)]
    public string? PreviewUrl { get; init; }

    /// <summary>
    /// List of genres associated with the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("genres")]
    public IReadOnlyList<string>? Genres { get; init; }

    /// <summary>
    /// Current rank position in the selected region.
    /// </summary>
    [JsonPropertyName("rank_position")]
    public required string RankPosition { get; init; }

    /// <summary>
    /// Historical ranking data (up to 30 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trending_history")]
    public IReadOnlyList<TrendingHistory>? TrendingHistory { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_duration_song_clip")]
    public FullDurationSongClip? FullDurationSongClip { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trending_song_clip")]
    public TrendingSongClip? TrendingSongClip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
