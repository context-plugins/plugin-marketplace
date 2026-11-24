using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The podcast associated with the private feed token.
/// </summary>
public record PodcastShowData1
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
    /// Selected categories for the podcast, ordered by display position.
    /// </summary>
    [JsonPropertyName("categories")]
    public required IReadOnlyList<string> Categories { get; init; }

    /// <summary>
    /// The URL of the podcast artwork. Empty string when no artwork is set.
    /// </summary>
    [JsonPropertyName("artwork_url")]
    public required string ArtworkUrl { get; init; }

    /// <summary>
    /// The status of the podcast.
    /// </summary>
    [JsonPropertyName("status")]
    public required PodcastShowStatus2 Status { get; init; }

    /// <summary>
    /// The ISO 639-1 two-letter language code for the podcast.
    /// </summary>
    [JsonPropertyName("language")]
    public required string Language { get; init; }

    /// <summary>
    /// The title of the podcast.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The author of the podcast.
    /// </summary>
    [JsonPropertyName("author")]
    public required string Author { get; init; }

    /// <summary>
    /// The type of the podcast.
    /// </summary>
    [JsonPropertyName("type")]
    public required PodcastShowType2 Type { get; init; }

    /// <summary>
    /// Whether the podcast was created via an import.
    /// </summary>
    [JsonPropertyName("imported")]
    public required bool Imported { get; init; }

    /// <summary>
    /// The copyright text for the podcast.
    /// </summary>
    [JsonPropertyName("copyright")]
    public required string Copyright { get; init; }

    /// <summary>
    /// The most common interval, in whole days, between consecutive published episodes.
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
    /// Platform distribution URLs keyed by platform name. Present only for public podcasts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform_links")]
    public IReadOnlyDictionary<string, string>? PlatformLinks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
