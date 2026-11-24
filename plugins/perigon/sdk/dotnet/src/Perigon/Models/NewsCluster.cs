using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Expanded story cluster details, when requested and available.
/// </summary>
public record NewsCluster
{
    /// <summary>
    /// Date and time the story was created, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Date and time the story was last updated, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public string? UpdatedAt { get; init; }

    /// <summary>
    /// Date and time the story became initialized and visible, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initializedAt")]
    public string? InitializedAt { get; init; }

    /// <summary>
    /// Unique identifier for the story cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Identifier of the original story when this story is a duplicate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicateOf")]
    public string? DuplicateOf { get; init; }

    /// <summary>
    /// URL-safe identifier for the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// Generated story title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Generated story summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Short generated story summary, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortSummary")]
    public string? ShortSummary { get; init; }

    /// <summary>
    /// Article IDs supporting the story summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summaryReferences")]
    public IReadOnlyList<string>? SummaryReferences { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageSource")]
    public SourceHolder? ImageSource { get; init; }

    /// <summary>
    /// Primary image URL selected for the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Key facts and developments identified in the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyPoints")]
    public IReadOnlyList<KeyPoint>? KeyPoints { get; init; }

    /// <summary>
    /// Questions and answers generated from the story content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("questions")]
    public IReadOnlyList<Question>? Questions { get; init; }

    /// <summary>
    /// Distinct publisher domains represented in the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uniqueSources")]
    public IReadOnlyList<string>? UniqueSources { get; init; }

    /// <summary>
    /// Representative articles selected for the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedArticles")]
    public IReadOnlyList<Article>? SelectedArticles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentiment")]
    public SentimentHolder? Sentiment { get; init; }

    /// <summary>
    /// Number of unique articles in the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uniqueCount")]
    public int? UniqueCount { get; init; }

    /// <summary>
    /// Number of reprinted articles in the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reprintCount")]
    public int? ReprintCount { get; init; }

    /// <summary>
    /// Total article count including reprints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalCount")]
    public int? TotalCount { get; init; }

    /// <summary>
    /// Countries associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countries")]
    public IReadOnlyList<RecordStatHolder>? Countries { get; init; }

    /// <summary>
    /// Countries most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topCountries")]
    public IReadOnlyList<string>? TopCountries { get; init; }

    /// <summary>
    /// Topics associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topics")]
    public IReadOnlyList<RecordStatHolder>? Topics { get; init; }

    /// <summary>
    /// Topics most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topTopics")]
    public IReadOnlyList<TopicHolder>? TopTopics { get; init; }

    /// <summary>
    /// Categories associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<RecordStatHolder>? Categories { get; init; }

    /// <summary>
    /// Categories most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topCategories")]
    public IReadOnlyList<CategoryHolder>? TopCategories { get; init; }

    /// <summary>
    /// Google Content Categories associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxonomies")]
    public IReadOnlyList<RecordStatHolder>? Taxonomies { get; init; }

    /// <summary>
    /// Google Content Categories most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topTaxonomies")]
    public IReadOnlyList<CategoryHolder>? TopTaxonomies { get; init; }

    /// <summary>
    /// People associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<PersonCount>? People { get; init; }

    /// <summary>
    /// People most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topPeople")]
    public IReadOnlyList<PersonHolder>? TopPeople { get; init; }

    /// <summary>
    /// Companies associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<CompanyCount>? Companies { get; init; }

    /// <summary>
    /// Companies most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topCompanies")]
    public IReadOnlyList<CompanyHolder>? TopCompanies { get; init; }

    /// <summary>
    /// Locations associated with the story and their article counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<LocationCount>? Locations { get; init; }

    /// <summary>
    /// Locations most strongly associated with the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topLocations")]
    public IReadOnlyList<LocationHolder>? TopLocations { get; init; }

    /// <summary>
    /// Matched text fragments grouped by story field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highlights")]
    public IReadOnlyDictionary<string, object>? Highlights { get; init; }

    /// <summary>
    /// Ratio of unique publisher domains to total articles in the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDiversity")]
    public double? SourceDiversity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
