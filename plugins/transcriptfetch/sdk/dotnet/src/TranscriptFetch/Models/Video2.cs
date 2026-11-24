using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Core.Validation;
using TranscriptFetch.Core.Validation.Attributes;

namespace TranscriptFetch.Models;

/// <summary>
/// One row of a listing. <c>url</c> is accepted as-is by the transcript and batch endpoints. The platform is not repeated per row: the page's <c>platform</c> says it.
/// </summary>
public record Video2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videoId")]
    public string? VideoId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Seconds, when the source reports it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public double? Duration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    /// <summary>
    /// Upload time. Exact for TikTok, Instagram and podcasts; approximate on YouTube, whose listings only say "2 days ago", so it is exact to the day for recent videos and up to a year off for old ones.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishedAt")]
    public DateTimeOffset? PublishedAt { get; init; }

    /// <summary>
    /// Engagement counts where the source exposes them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public Stats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
