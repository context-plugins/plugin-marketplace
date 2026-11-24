using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComStatutesApi
{
    /// <summary>
    /// Statute section id, for use with /v1/statutes/sections/{id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section_id")]
    public Guid? SectionId { get; init; }

    /// <summary>
    /// The chapter this section belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chapter_slug")]
    public string? ChapterSlug { get; init; }

    /// <summary>
    /// The chapter this section belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chapter_short_title")]
    public string? ChapterShortTitle { get; init; }

    /// <summary>
    /// The chapter this section belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chapter_jurisdiction")]
    public string? ChapterJurisdiction { get; init; }

    /// <summary>
    /// The chapter this section belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chapter_number")]
    public string? ChapterNumber { get; init; }

    /// <summary>
    /// Section numbering as published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section_number")]
    public string? SectionNumber { get; init; }

    /// <summary>
    /// Section numbering as published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subsection")]
    public string? Subsection { get; init; }

    /// <summary>
    /// Slug for the public statute page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section_slug")]
    public string? SectionSlug { get; init; }

    /// <summary>
    /// Section title and plain-language summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Section title and plain-language summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Search-result highlight from the matched text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snippet")]
    public string? Snippet { get; init; }

    /// <summary>
    /// Relevance score. Results are pre-sorted by this, highest first.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rank")]
    public double? Rank { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
