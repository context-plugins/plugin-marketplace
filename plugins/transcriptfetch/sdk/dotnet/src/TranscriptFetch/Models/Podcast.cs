using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation;
using TranscriptFetch.Core.Validation.Attributes;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

/// <summary>
/// Present only when the input was a podcast link. Spotify and Apple do not host podcast audio; both read the publisher's RSS feed, so the link is resolved to that feed and the episode's own audio file. These fields say which show and episode were matched, so you can verify the resolution was correct.
/// </summary>
public record Podcast
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show")]
    public string? Show { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("episode")]
    public string? Episode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published_at")]
    public DateTimeOffset? PublishedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feed_url")]
    [Format(FormatKind.Uri)]
    public string? FeedUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audio_url")]
    [Format(FormatKind.Uri)]
    public string? AudioUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolved_via")]
    public ResolvedVia? ResolvedVia { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
