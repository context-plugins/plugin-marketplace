using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

/// <summary>
/// A Google Play store listing crawled live for one country and language.
/// <para>
/// Unlike <c>PlayApp</c>, nothing here comes from AppstoreSpy storage: the fields are
/// exactly what Google Play served for the requested <c>country</c> and <c>language</c> at
/// <c>crawled</c>, so any locale Google Play Console accepts can be requested.
/// </para>
/// </summary>
public record PlayListing
{
    /// <summary>
    /// The app package name
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Country the listing was requested for (Google Play <c>gl</c>)
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// Language the listing was requested in (Google Play <c>hl</c>)
    /// </summary>
    [JsonPropertyName("language")]
    public required string Language { get; init; }

    /// <summary>
    /// When Google Play was crawled, UTC
    /// </summary>
    [JsonPropertyName("crawled")]
    public required DateTimeOffset Crawled { get; init; }

    /// <summary>
    /// Link to the listing on Google Play for this country and language
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Title as shown on Google Play
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Short description as shown on Google Play
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("short")]
    public string? Short { get; init; }

    /// <summary>
    /// Full description as shown on Google Play
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// What's new as shown on Google Play
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("whatsnew")]
    public string? Whatsnew { get; init; }

    /// <summary>
    /// Icon URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon")]
    public string? Icon { get; init; }

    /// <summary>
    /// Feature graphic URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feature")]
    public string? Feature { get; init; }

    /// <summary>
    /// Promo video Youtube link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trailer")]
    public string? Trailer { get; init; }

    /// <summary>
    /// Screenshot URLs in the order Google Play shows them
    /// </summary>
    [JsonPropertyName("screenshots")]
    public required IReadOnlyList<string> Screenshots { get; init; }

    /// <summary>
    /// True when the developer has not supplied this language and Google Play shows a machine translation of the default listing; <c>short</c> and <c>description</c> are then that translation. False means the texts are the developer's own: a listing in this language, or the default listing when Google Play does not translate it.
    /// </summary>
    [JsonPropertyName("translated")]
    public required bool Translated { get; init; }

    /// <summary>
    /// Source language of the machine translation, as Google Play names it in the requested language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translated_from")]
    public string? TranslatedFrom { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
