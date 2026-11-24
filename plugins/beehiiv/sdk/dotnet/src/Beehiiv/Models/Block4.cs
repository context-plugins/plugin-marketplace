using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Block4
{
    /// <summary>
    /// Discriminator value: rss
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "rss";

    /// <summary>
    /// Optional styling for borders, spacing, colors, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_settings")]
    public VisualSettings1? VisualSettings { get; init; }

    /// <summary>
    /// Optional rules for when/where this block is shown, including dynamic content targeting via condition sets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility_settings")]
    public VisibilitySettings1? VisibilitySettings { get; init; }

    /// <summary>
    /// The ID of the external RSS feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalRssFeedId")]
    public string? ExternalRssFeedId { get; init; }

    /// <summary>
    /// The URL of the RSS feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rssFeedUrl")]
    public string? RssFeedUrl { get; init; }

    /// <summary>
    /// The layout of the articles from the feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articleLayout")]
    public RssBlockLayout? ArticleLayout { get; init; }

    /// <summary>
    /// How to select feed articles, by count or time window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectionMode")]
    public RssSelectionMode1? SelectionMode { get; init; }

    /// <summary>
    /// Trailing window in hours when selectionMode is time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeWindowHours")]
    public int? TimeWindowHours { get; init; }

    /// <summary>
    /// The number of articles to show from the feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articlesToShow")]
    public int? ArticlesToShow { get; init; }

    /// <summary>
    /// Whether to show a call to action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showCta")]
    public bool? ShowCta { get; init; }

    /// <summary>
    /// The text of the call to action. Applicable if ctaStyle is button or link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ctaText")]
    public string? CtaText { get; init; }

    /// <summary>
    /// The style of the call to action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ctaStyle")]
    public RssCtaStyle? CtaStyle { get; init; }

    /// <summary>
    /// The alignment of the call to action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ctaAlignment")]
    public RssCtaAlignment? CtaAlignment { get; init; }

    /// <summary>
    /// Whether or not to refresh the contents from the RSS feed before sending out the email.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshOnSend")]
    public bool? RefreshOnSend { get; init; }

    /// <summary>
    /// Whether to show the article title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showArticleTitle")]
    public bool? ShowArticleTitle { get; init; }

    /// <summary>
    /// Whether to show the article thumbnail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showArticleThumbnail")]
    public bool? ShowArticleThumbnail { get; init; }

    /// <summary>
    /// The position of the thumbnail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnailPosition")]
    public RssThumbnailPosition? ThumbnailPosition { get; init; }

    /// <summary>
    /// Whether to show the author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showAuthor")]
    public bool? ShowAuthor { get; init; }

    /// <summary>
    /// Whether to show the date the article was published
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showPublishedDate")]
    public bool? ShowPublishedDate { get; init; }

    /// <summary>
    /// Whether to show the categories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showCategories")]
    public bool? ShowCategories { get; init; }

    /// <summary>
    /// Whether to show the article description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showDescription")]
    public bool? ShowDescription { get; init; }

    /// <summary>
    /// Whether to show the article content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showContent")]
    public bool? ShowContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
