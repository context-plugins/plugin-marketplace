using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

/// <summary>
/// The article as fetched from the source. <c>raw_text</c> is intentionally NOT exposed here.
/// </summary>
public record OriginalArticle
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    [JsonPropertyName("uid")]
    [RegularExpression("^[a-f0-9]{16}$")]
    public required string Uid { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    /// <summary>
    /// Article authors. On SEC Form 4 rows: every reporting owner of the filing, primary first — a joint filing by a holding vehicle and the person behind it lists both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authors")]
    public IReadOnlyList<string>? Authors { get; init; }

    /// <summary>
    /// AI-generated summary safe to redistribute.
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("banner_image")]
    [Format(FormatKind.Uri)]
    public string? BannerImage { get; init; }

    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_domain")]
    public string? SourceDomain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topics")]
    public IReadOnlyList<Topic>? Topics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tickers_sentiment")]
    public IReadOnlyList<object>? TickersSentiment { get; init; }

    /// <summary>
    /// SEC Form 4 insider rows only — the holding pool the transaction touched. <c>null</c> for non-insider news. A single Form 4 can surface a <c>direct</c> and an <c>indirect</c> leg of the same plan as two separate articles (same filing URL, same date); they are distinct economic events, so SUM them rather than dedupe by URL/accession.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownership_form")]
    public OwnershipForm? OwnershipForm { get; init; }

    /// <summary>
    /// When AlphAI received the article — NOT its publish time (that is <c>time_published</c>). Use it to judge how fresh a pickup is. Do not build "what's new" polling on this field; that is what <c>sort=ingested</c> on <c>/api/news/</c> and <c>/api/news/insider/</c> is for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Last time the stored article row was touched (including internal maintenance). Informational only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
