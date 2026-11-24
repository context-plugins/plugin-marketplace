using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

/// <summary>
/// The full story — a <c>StoryCard</c> plus the summary's body.
/// </summary>
public record Story
{
    /// <summary>
    /// Permanent story key — the <c>uid</c> of the story's first root article; the same value article rows carry in their <c>story_id</c>. Opens <c>/api/stories/{story_id}/</c>.
    /// </summary>
    [JsonPropertyName("story_id")]
    public required string StoryId { get; init; }

    /// <summary>
    /// The summary's headline, written by AlphAI from the articles. In <c>preparing</c> state, the lead article's own headline.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// One paragraph: what happened, with the figures. In <c>preparing</c> state, the lead article's collector summary.
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    /// <summary>
    /// How much the event matters, on the feed's 1-10 relevance scale: the median of each publisher's best-scored article on the event, rounded down — so one outlet's 9 does not lift a story every other outlet scored 7. Stories below 7 are not listed and carry no summary.
    /// </summary>
    [JsonPropertyName("importance")]
    [Minimum(1)]
    [Maximum(10)]
    public required int Importance { get; init; }

    /// <summary>
    /// The feed category of the story's root article (same 14 values as <c>enrichment.category</c>).
    /// </summary>
    [JsonPropertyName("category")]
    public required string Category { get; init; }

    /// <summary>
    /// Active tickers the story's articles are tagged with. Macro stories carry an empty list.
    /// </summary>
    [JsonPropertyName("tickers")]
    public required IReadOnlyList<string> Tickers { get; init; }

    /// <summary>
    /// Distinct publishers (source domains) covering the story — always 2 or more.
    /// </summary>
    [JsonPropertyName("publishers")]
    public required int Publishers { get; init; }

    /// <summary>
    /// Articles in the story that the feed shows (<c>relevance_score &gt;= 4</c>), reprints included.
    /// </summary>
    [JsonPropertyName("materials")]
    public required int Materials { get; init; }

    /// <summary>
    /// Publication time of the story's earliest article.
    /// </summary>
    [JsonPropertyName("first_published_at")]
    public required DateTimeOffset? FirstPublishedAt { get; init; }

    /// <summary>
    /// Publication time of the story's latest article; <c>/api/stories/</c> is ordered by it.
    /// </summary>
    [JsonPropertyName("last_material_at")]
    public required DateTimeOffset? LastMaterialAt { get; init; }

    /// <summary>
    /// When the story's key facts last changed — a rewrite that only reworded the summary does not move it. The freshness Top stories rank by.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// <c>published</c>: the summary covers every article the story had when it was written. <c>stale</c>: articles joined since; the rewrite is queued. <c>preparing</c>: no summary yet — the texts are the lead article's own.
    /// </summary>
    [JsonPropertyName("summary_state")]
    public required SummaryState SummaryState { get; init; }

    /// <summary>
    /// Why the event matters to the market, one short paragraph. Empty in <c>preparing</c> state.
    /// </summary>
    [JsonPropertyName("why_it_matters")]
    public required string WhyItMatters { get; init; }

    /// <summary>
    /// Up to six facts, each attributed to the article it was read from.
    /// </summary>
    [JsonPropertyName("key_facts")]
    [MaxLength(6)]
    public required IReadOnlyList<StoryKeyFact> KeyFacts { get; init; }

    /// <summary>
    /// The read per ticker — direction and a one-line note.
    /// </summary>
    [JsonPropertyName("ticker_takes")]
    public required IReadOnlyList<StoryTickerTake> TickerTakes { get; init; }

    /// <summary>
    /// What the articles leave open or disagree on.
    /// </summary>
    [JsonPropertyName("uncertainties")]
    public required IReadOnlyList<string> Uncertainties { get; init; }

    /// <summary>
    /// Articles whose text the model read when writing the summary. Shown as "based on N of M sources" next to <c>materials_at_build</c>.
    /// </summary>
    [JsonPropertyName("based_on")]
    public required int BasedOn { get; init; }

    /// <summary>
    /// The story's visible article count when the summary was written.
    /// </summary>
    [JsonPropertyName("materials_at_build")]
    public required int MaterialsAtBuild { get; init; }

    /// <summary>
    /// Articles that joined after the summary was written (non-zero only in <c>stale</c> state).
    /// </summary>
    [JsonPropertyName("new_materials")]
    public required int NewMaterials { get; init; }

    /// <summary>
    /// When the published summary was written; <c>null</c> in <c>preparing</c> state.
    /// </summary>
    [JsonPropertyName("revision_generated_at")]
    public required DateTimeOffset? RevisionGeneratedAt { get; init; }

    /// <summary>
    /// The model that wrote the published summary; empty in <c>preparing</c> state.
    /// </summary>
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    /// <summary>
    /// Whether alphai.io lets search engines index this story's page (a published summary, <c>importance &gt;= 8</c> and at least five publishers). Informational — it says nothing about the API's own access.
    /// </summary>
    [JsonPropertyName("indexable")]
    public required bool Indexable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
