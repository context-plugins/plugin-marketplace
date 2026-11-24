using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation.Attributes;

namespace TranscriptFetch.Models;

public record ChannelRequest2
{
    /// <summary>
    /// YouTube: @handle, /channel/UC… URL, or UC… ID. TikTok: profile URL (tiktok.com/@user). Instagram: profile URL (instagram.com/user/). Spotify: show URL (open.spotify.com/show/…). Apple Podcasts: show URL (podcasts.apple.com/…/id…). Any other URL is fetched as a podcast RSS/Atom feed.
    /// </summary>
    [JsonPropertyName("channel")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Channel { get; init; }

    /// <summary>
    /// Max videos to return per page. Defaults to 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(50)]
    public int? Limit { get; init; } = 5;

    /// <summary>
    /// Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for the first page. Cursors are scoped to the listing (and, for search, the platform) that issued them. Offset-based sources cannot page past the first 2000 items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    [MaxLength(256)]
    public string? Cursor { get; init; }

    /// <summary>
    /// Newest video ID you have already seen. The response is trimmed to videos newer than it, and a page with nothing newer costs no credits - so you can poll a channel for new uploads for free.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("since_video_id")]
    [StringLength(2000, MinimumLength = 1)]
    public string? SinceVideoId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
