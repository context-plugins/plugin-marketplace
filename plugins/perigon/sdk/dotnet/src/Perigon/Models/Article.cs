using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record Article
{
    /// <summary>
    /// Canonical URL of the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Author byline as published by the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorsByline")]
    public string? AuthorsByline { get; init; }

    /// <summary>
    /// Unique Perigon identifier for the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articleId")]
    public string? ArticleId { get; init; }

    /// <summary>
    /// Identifier of the story cluster containing the article, when assigned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterId")]
    public string? ClusterId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public SourceHolder? Source { get; init; }

    /// <summary>
    /// Primary image URL associated with the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Two-character country code associated with the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// ISO 639 two-letter language code for the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public string? Language { get; init; }

    /// <summary>
    /// Date and time the article was published, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubDate")]
    public string? PubDate { get; init; }

    /// <summary>
    /// Date and time the article was added to Perigon, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addDate")]
    public string? AddDate { get; init; }

    /// <summary>
    /// Date and time the article was last refreshed by Perigon, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshDate")]
    public string? RefreshDate { get; init; }

    /// <summary>
    /// Search relevance score for the article, when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    /// <summary>
    /// Article headline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Article description or publisher-provided excerpt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Full article body available to Perigon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Word count of the English article content, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enContentWordCount")]
    public int? EnContentWordCount { get; init; }

    /// <summary>
    /// Primary medium type, such as Article or Video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medium")]
    public string? Medium { get; init; }

    /// <summary>
    /// URLs linked from the article content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyList<string>? Links { get; init; }

    /// <summary>
    /// Editorial labels assigned to the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<LabelHolder>? Labels { get; init; }

    /// <summary>
    /// Event types detected in the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventTypes")]
    public IReadOnlyList<EventTypeHolder>? EventTypes { get; init; }

    /// <summary>
    /// Known journalist records matched to the article byline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchedAuthors")]
    public IReadOnlyList<IdNameHolder>? MatchedAuthors { get; init; }

    /// <summary>
    /// Claim identified in fact-check content, when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("claim")]
    public string? Claim { get; init; }

    /// <summary>
    /// Verdict identified in fact-check content, when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public string? Verdict { get; init; }

    /// <summary>
    /// Keywords extracted from the article with their relevance weights.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    public IReadOnlyList<KeywordHolder>? Keywords { get; init; }

    /// <summary>
    /// Topics assigned to the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topics")]
    public IReadOnlyList<TopicHolder>? Topics { get; init; }

    /// <summary>
    /// Broad content categories assigned to the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<CategoryHolder>? Categories { get; init; }

    /// <summary>
    /// Google Content Categories assigned to the article with confidence scores.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxonomies")]
    public IReadOnlyList<CategoryWithScoreHolder>? Taxonomies { get; init; }

    /// <summary>
    /// Named entities extracted from the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    public IReadOnlyList<EntityHolder>? Entities { get; init; }

    /// <summary>
    /// Companies identified in the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<CompanyHolder>? Companies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentiment")]
    public SentimentHolder? Sentiment { get; init; }

    /// <summary>
    /// Generated summary of the article, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Short generated summary of the article, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortSummary")]
    public string? ShortSummary { get; init; }

    /// <summary>
    /// Translated article content, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translation")]
    public string? Translation { get; init; }

    /// <summary>
    /// English translation of the article title, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translatedTitle")]
    public string? TranslatedTitle { get; init; }

    /// <summary>
    /// English translation of the article description, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translatedDescription")]
    public string? TranslatedDescription { get; init; }

    /// <summary>
    /// English translation of the article summary, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translatedSummary")]
    public string? TranslatedSummary { get; init; }

    /// <summary>
    /// Locations identified as central to the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<LocationHolder>? Locations { get; init; }

    /// <summary>
    /// Whether the article is a reprint of previously published content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reprint")]
    public bool? Reprint { get; init; }

    /// <summary>
    /// Identifier grouping the original article with its known reprints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reprintGroupId")]
    public string? ReprintGroupId { get; init; }

    /// <summary>
    /// Structured geographic places extracted from the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public IReadOnlyList<Place>? Places { get; init; }

    /// <summary>
    /// Known people identified in the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<PersonHolder>? People { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cluster")]
    public NewsCluster? Cluster { get; init; }

    /// <summary>
    /// Expanded journalist details, when requested and available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("journalists")]
    public IReadOnlyList<Journalist>? Journalists { get; init; }

    /// <summary>
    /// Matched text fragments grouped by article field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highlights")]
    public IReadOnlyDictionary<string, object>? Highlights { get; init; }

    /// <summary>
    /// Vector embeddings associated with the article, when requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vectors")]
    public IReadOnlyList<VectorData>? Vectors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
