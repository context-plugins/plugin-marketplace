using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Google's Knowledge Graph panel for the queried entity. Omitted from <c>result</c> when no Knowledge Graph panel appears on the SERP — treat it as optional rather than expecting null.
/// </summary>
public record KnowledgeGraph1
{
    /// <summary>
    /// Entity name as shown in the panel header
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Entity category label as rendered by Google (e.g. "American rapper", "French museum"). Free-form string, not an enum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Google Knowledge Graph ID for the entity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kgmid")]
    public string? Kgmid { get; init; }

    /// <summary>
    /// Short description of the entity (may be sourced from Wikipedia or Google's own knowledge base)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// URL of the entity's image as served by Google
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Official website URL for the entity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Menu URL — present for restaurants and food businesses
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("menu")]
    public string? Menu { get; init; }

    /// <summary>
    /// Trailer URL — present for films and TV shows
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trailer")]
    public string? Trailer { get; init; }

    /// <summary>
    /// Attribution source for the entity description (typically Wikipedia)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source11? Source { get; init; }

    /// <summary>
    /// Factual key-value pairs extracted from the panel (e.g. born, genre, label). Keys are free-form strings as rendered by Google.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<AttributeModel>? Attributes { get; init; }

    /// <summary>
    /// Social media and external profile links for the entity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profiles")]
    public IReadOnlyList<Profile1>? Profiles { get; init; }

    /// <summary>
    /// Related entities that users also search for
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleAlsoSearchFor")]
    public IReadOnlyList<PeopleAlsoSearchFor1>? PeopleAlsoSearchFor { get; init; }

    /// <summary>
    /// "Things to know" topic clusters extracted from the panel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thingsToKnow")]
    public IReadOnlyList<ThingsToKnow>? ThingsToKnow { get; init; }

    /// <summary>
    /// Review platform ratings (e.g. Rotten Tomatoes, IMDb) — present for films and TV shows
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ratings")]
    public IReadOnlyList<Rating3>? Ratings { get; init; }

    /// <summary>
    /// Streaming platform links for films and TV shows
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamingOptions")]
    public IReadOnlyList<StreamingOption1>? StreamingOptions { get; init; }

    /// <summary>
    /// Web ratings from review platforms — present for local businesses (e.g. Google, Tripadvisor, Yelp)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webRatings")]
    public IReadOnlyList<WebRating1>? WebRatings { get; init; }

    /// <summary>
    /// Statistics card — present for sports teams, organizations, and similar entities
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statsCard")]
    public StatsCard? StatsCard { get; init; }

    /// <summary>
    /// Recent social media posts from the entity's official accounts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialPosts")]
    public IReadOnlyList<SocialPost1>? SocialPosts { get; init; }

    /// <summary>
    /// Notable alumni — present for universities and educational institutions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notableAlumni")]
    public IReadOnlyList<NotableAlumnus1>? NotableAlumni { get; init; }

    /// <summary>
    /// Contact and ordering links — present for local businesses
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public IReadOnlyList<Contact1>? Contact { get; init; }

    /// <summary>
    /// Current weather — present for geographic entities (cities, regions)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weather")]
    public Weather? Weather { get; init; }

    /// <summary>
    /// Aggregate star rating — present for local businesses
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public Rating2? Rating { get; init; }

    /// <summary>
    /// Admission options — present for museums, parks, and ticketed venues
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("admission")]
    public IReadOnlyList<Admission1>? Admission { get; init; }

    /// <summary>
    /// Notable artworks — present for artists and art institutions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artworks")]
    public IReadOnlyList<Artwork1>? Artworks { get; init; }

    /// <summary>
    /// True when Google surfaces a 3D model viewer for the entity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has3dModel")]
    public bool? Has3DModel { get; init; }

    /// <summary>
    /// Hotel booking options — present for hotel entities
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hotelOptions")]
    public IReadOnlyList<HotelOption1>? HotelOptions { get; init; }

    /// <summary>
    /// Trending products — present for retail brands
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trendingProducts")]
    public IReadOnlyList<TrendingProduct1>? TrendingProducts { get; init; }

    /// <summary>
    /// Merchant or brand video content — present for retail businesses
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchantVideos")]
    public IReadOnlyList<MerchantVideo1>? MerchantVideos { get; init; }

    /// <summary>
    /// Music streaming platform links — present for musicians and musical acts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listenOn")]
    public IReadOnlyList<ListenOn1>? ListenOn { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to, or is empty, missing or a <c>google.com/goto</c> URL when the link is not resolved yet. In that case, resolve this value with <c>POST /v1/monitor/google/goto</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
