using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

/// <summary>
/// Who published the current date. <c>article</c> is a news article or company announcement. <c>company_website</c> is the issuer's own investor relations calendar. <c>null</c> when our editors set the date.
/// </summary>
public record Source1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// The publisher: the outlet that carried the article, or the issuer's investor relations site. <c>null</c> when the article is no longer available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The investor relations calendar page, for <c>company_website</c>. <c>null</c> for <c>article</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// ID of the article, for <c>article</c>. Matches <c>source_article_id</c>. <c>null</c> when the article is no longer available, and for <c>company_website</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article_id")]
    public string? ArticleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
