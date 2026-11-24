using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record SearchFilters
{
    /// <summary>
    /// Restrict to content types (<c>phone_call</c>, <c>meeting</c>, <c>interview</c>,
    /// <c>government_meeting</c>, <c>podcast_episode</c>, ...) — the typed audio axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_types")]
    public IReadOnlyList<string>? ContentTypes { get; init; }

    /// <summary>
    /// Filter by publish date (ISO 8601 format: "2024-01-01" or "2024-01-01T00:00:00Z").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_from")]
    public string? DateFrom { get; init; }

    /// <summary>
    /// Filter by publish date (ISO 8601 format: "2024-12-31" or "2024-12-31T23:59:59Z").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_to")]
    public string? DateTo { get; init; }

    /// <summary>
    /// Restrict to specific podcast IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podcast_ids")]
    public IReadOnlyList<string>? PodcastIds { get; init; }

    /// <summary>
    /// Restrict to specific speakers (exact match on speaker name).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakers")]
    public IReadOnlyList<string>? Speakers { get; init; }

    /// <summary>
    /// Tenancy scope: <c>all</c> (default: the public corpus plus your own data) |
    /// <c>public</c> (the public corpus only) | <c>workspace</c> (your own data only;
    /// with an API key, the key's workspace). It only narrows what you may
    /// read, never widens it; any other value is a 400. <c>workspace</c> also
    /// relaxes the short-segment floor and scopes semantic retrieval.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility")]
    public string? Visibility { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
