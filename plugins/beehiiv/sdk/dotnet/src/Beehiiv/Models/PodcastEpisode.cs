using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PodcastEpisode
{
    /// <summary>
    /// The prefixed ID of the episode.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The time the episode was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The time the episode was last updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("updated")]
    public required int Updated { get; init; }

    /// <summary>
    /// The title of the episode.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The web slug where this episode can be accessed.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The exact time the system published the episode (when it went live), not the scheduled time the user set for publication. Measured in seconds since the Unix epoch. Null when the episode has not been published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public int? PublishDate { get; init; }

    /// <summary>
    /// The time displayed in place of the <c>publish_date</c>. Measured in seconds since the Unix epoch. Uses a custom display date if set, otherwise the scheduled time the user set for publication, otherwise the <c>publish_date</c>, otherwise the creation date. For imported episodes, the original feed's <c>pubDate</c> is stored as the custom display date so the episode keeps its original date in feeds even though <c>publish_date</c> reflects when it was published in beehiiv. This is the same field used to order episodes in the podcast's RSS feed.
    /// </summary>
    [JsonPropertyName("displayed_date")]
    public required int DisplayedDate { get; init; }

    /// <summary>
    /// The duration of the episode audio in seconds. Null when no completed audio file is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public int? Duration { get; init; }

    /// <summary>
    /// A plain-text, truncated version of the episode show notes (max 255 characters). Derived from the same content as <c>show_notes</c>.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The full HTML show notes for the episode. <c>description</c> is a truncated plain-text version of this content.
    /// </summary>
    [JsonPropertyName("show_notes")]
    public required string ShowNotes { get; init; }

    /// <summary>
    /// The URL of the episode artwork. Falls back to the podcast artwork when the episode has none. Empty string when no artwork is set.
    /// </summary>
    [JsonPropertyName("artwork_url")]
    public required string ArtworkUrl { get; init; }

    /// <summary>
    /// The status of the episode.&lt;br&gt;<c>draft</c> - Not yet published.&lt;br&gt;<c>scheduled</c> - Scheduled for future publication.&lt;br&gt;<c>published</c> - Available via web and RSS.&lt;br&gt;<c>archived</c> - No longer available via web or RSS.
    /// </summary>
    [JsonPropertyName("status")]
    public required PodcastEpisodeStatus Status { get; init; }

    /// <summary>
    /// The season number for the episode, if set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("season_number")]
    public int? SeasonNumber { get; init; }

    /// <summary>
    /// The episode number within the season, if set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("episode_number")]
    public int? EpisodeNumber { get; init; }

    /// <summary>
    /// The public streaming URL for the episode audio. Null when no completed audio file is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audio_url")]
    public string? AudioUrl { get; init; }

    /// <summary>
    /// The WebVTT transcript URL for the episode. Null when transcripts are disabled or no completed transcript is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript_url")]
    public string? TranscriptUrl { get; init; }

    /// <summary>
    /// The podcast this episode belongs to.
    /// </summary>
    [JsonPropertyName("show")]
    public required PodcastShow2 Show { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
