using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.AnyOf;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record RadarFilingContext
{
    [JsonPropertyName("form")]
    public required Form Form { get; init; }

    [JsonPropertyName("accession_number")]
    public required string AccessionNumber { get; init; }

    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    [JsonPropertyName("observed_at")]
    public required DateTimeOffset ObservedAt { get; init; }

    [JsonPropertyName("sec_url")]
    public required string SecUrl { get; init; }

    [JsonPropertyName("news_uid")]
    public required string NewsUid { get; init; }

    /// <summary>
    /// Article title frozen at the context cutoff.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_title")]
    public NewsTitle? NewsTitle { get; init; }

    /// <summary>
    /// Article publication time for its AlphAI URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_published")]
    public NewsPublished? NewsPublished { get; init; }

    /// <summary>
    /// An enriched article existed before the context cutoff. False on older snapshots without metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_article")]
    public bool? HasArticle { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<string>? Items { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_item")]
    public PrimaryItem? PrimaryItem { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_date")]
    public EventDate? EventDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind1? Kind { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period_label")]
    public PeriodLabel? PeriodLabel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
