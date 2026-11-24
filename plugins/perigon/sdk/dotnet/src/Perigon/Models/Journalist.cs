using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Expanded journalist details, when requested and available.
/// </summary>
public record Journalist
{
    /// <summary>
    /// Unique Perigon identifier for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryRecordId")]
    public string? PrimaryRecordId { get; init; }

    /// <summary>
    /// Common display name of the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Full name of the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullName")]
    public string? FullName { get; init; }

    /// <summary>
    /// Professional headline associated with the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headline")]
    public string? Headline { get; init; }

    /// <summary>
    /// Biographical description of the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Professional title of the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Journalist's email.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Locations associated with the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<LocationHolder>? Locations { get; init; }

    /// <summary>
    /// Date and time the journalist record was last refreshed, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public string? UpdatedAt { get; init; }

    /// <summary>
    /// Topics most frequently covered by the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topTopics")]
    public IReadOnlyList<NameCount>? TopTopics { get; init; }

    /// <summary>
    /// Publishers most frequently associated with the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topSources")]
    public IReadOnlyList<NameCount>? TopSources { get; init; }

    /// <summary>
    /// Categories most frequently covered by the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topCategories")]
    public IReadOnlyList<NameCount>? TopCategories { get; init; }

    /// <summary>
    /// Editorial labels most frequently associated with the journalist's articles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topLabels")]
    public IReadOnlyList<NameCount>? TopLabels { get; init; }

    /// <summary>
    /// Countries most frequently associated with the journalist's articles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topCountries")]
    public IReadOnlyList<NameCount>? TopCountries { get; init; }

    /// <summary>
    /// Average number of articles published by the journalist per month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avgMonthlyPosts")]
    public int? AvgMonthlyPosts { get; init; }

    /// <summary>
    /// Journalist's X or Twitter handle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("twitterHandle")]
    public string? TwitterHandle { get; init; }

    /// <summary>
    /// Biography from the journalist's X or Twitter profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("twitterBio")]
    public string? TwitterBio { get; init; }

    /// <summary>
    /// Profile image URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// LinkedIn profile URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrl")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// LinkedIn connection count for the journalist, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinConnections")]
    public int? LinkedinConnections { get; init; }

    /// <summary>
    /// LinkedIn follower count for the journalist, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinFollowers")]
    public int? LinkedinFollowers { get; init; }

    /// <summary>
    /// Facebook profile URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facebookUrl")]
    public string? FacebookUrl { get; init; }

    /// <summary>
    /// Instagram profile URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instagramUrl")]
    public string? InstagramUrl { get; init; }

    /// <summary>
    /// Personal or professional website URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteUrl")]
    public string? WebsiteUrl { get; init; }

    /// <summary>
    /// Blog URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blogUrl")]
    public string? BlogUrl { get; init; }

    /// <summary>
    /// Tumblr profile URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tumblrUrl")]
    public string? TumblrUrl { get; init; }

    /// <summary>
    /// YouTube channel URL for the journalist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("youtubeUrl")]
    public string? YoutubeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
