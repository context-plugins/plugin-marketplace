using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PodcastShow
{
    /// <summary>
    /// The prefixed ID of the podcast.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The time the podcast was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The URL slug of the podcast.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The description of the podcast.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Selected categories for the podcast, ordered by display position. Subcategories include the parent name (e.g. <c>News-Politics</c>).
    /// </summary>
    [JsonPropertyName("categories")]
    public required IReadOnlyList<string> Categories { get; init; }

    /// <summary>
    /// The URL of the podcast artwork. Empty string when no artwork is set.
    /// </summary>
    [JsonPropertyName("artwork_url")]
    public required string ArtworkUrl { get; init; }

    /// <summary>
    /// The status of the podcast.&lt;br&gt;<c>draft</c> - No episodes have been published.&lt;br&gt; <c>live</c> - Published and active.&lt;br&gt;<c>archived</c> - The podcast is no longer active.
    /// </summary>
    [JsonPropertyName("status")]
    public required PodcastShowStatus Status { get; init; }

    /// <summary>
    /// The ISO 639-1 two-letter language code for the podcast (e.g. <c>en</c>, <c>es</c>).
    /// </summary>
    [JsonPropertyName("language")]
    public required string Language { get; init; }

    /// <summary>
    /// The title of the podcast.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The author of the podcast. Defaults to the publication name.
    /// </summary>
    [JsonPropertyName("author")]
    public required string Author { get; init; }

    /// <summary>
    /// The type of the podcast.&lt;br&gt;<c>episodic</c> - Episodes can be consumed in any order.&lt;br&gt;<c>serial</c> - Episodes are intended to be consumed in order.
    /// </summary>
    [JsonPropertyName("type")]
    public required PodcastShowType Type { get; init; }

    /// <summary>
    /// Whether the podcast was created via an import.
    /// </summary>
    [JsonPropertyName("imported")]
    public required bool Imported { get; init; }

    /// <summary>
    /// The copyright text for the podcast. Defaults to the publication name.
    /// </summary>
    [JsonPropertyName("copyright")]
    public required string Copyright { get; init; }

    /// <summary>
    /// The most common interval, in whole days, between consecutive published episodes (the statistical mode of day gaps). Gaps are measured using each episode's display date — the custom display date if set, otherwise the scheduled time, otherwise the publish date, otherwise the creation date. Null when fewer than two published episodes exist or a frequency has not been calculated yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishing_frequency")]
    public int? PublishingFrequency { get; init; }

    /// <summary>
    /// The website URL associated with the podcast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_url")]
    public string? WebsiteUrl { get; init; }

    /// <summary>
    /// Whether the podcast is marked as explicit.
    /// </summary>
    [JsonPropertyName("explicit")]
    public required bool Explicit { get; init; }

    /// <summary>
    /// Platform distribution URLs keyed by platform name (e.g. <c>apple</c>, <c>spotify</c>, <c>youtube</c>). Present only for public podcasts. Platforms without a URL are null. Omitted for premium podcasts (limited to paid tiers), which use a private RSS feed with a unique URL per eligible subscriber.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform_links")]
    public IReadOnlyDictionary<string, string>? PlatformLinks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
