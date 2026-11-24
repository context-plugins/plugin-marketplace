using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DataCommonelementsComStatutesApi
{
    /// <summary>
    /// Statute section id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section_id")]
    public Guid? SectionId { get; init; }

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
    /// Full text of the section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body_text")]
    public string? BodyText { get; init; }

    /// <summary>
    /// Tagged topics for this section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topics")]
    public IReadOnlyList<string>? Topics { get; init; }

    /// <summary>
    /// Effective date and link to the official published text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effective_date")]
    public DateTimeOffset? EffectiveDate { get; init; }

    /// <summary>
    /// Effective date and link to the official published text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_url")]
    public DateTimeOffset? SourceUrl { get; init; }

    /// <summary>
    /// id, slug, jurisdiction, chapter_number, short_title, citation_format for the parent chapter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chapter")]
    public object? Chapter { get; init; }

    /// <summary>
    /// Formatted legal citation for this exact section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citation")]
    public string? Citation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
