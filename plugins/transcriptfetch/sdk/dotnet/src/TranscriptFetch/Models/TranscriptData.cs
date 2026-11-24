using System.Collections.Generic;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record TranscriptData
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "transcript";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("video_id")]
    public string? VideoId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Poster image for the video. TikTok and Instagram serve signed, expiring URLs, so copy the image rather than hotlinking it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnailUrl")]
    public string? ThumbnailUrl { get; init; }

    /// <summary>
    /// True when speaker diarization produced labels (podcast transcriptions only); segments then carry <c>speaker</c> ids.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diarized")]
    public bool? Diarized { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    /// <summary>
    /// Present only when the input was a podcast link. Spotify and Apple do not host podcast audio; both read the publisher's RSS feed, so the link is resolved to that feed and the episode's own audio file. These fields say which show and episode were matched, so you can verify the resolution was correct.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podcast")]
    public Podcast? Podcast { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
