using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EntityDetail
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonPropertyName("mention_count")]
    public required long MentionCount { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Top episodes mentioning this entity. Only populated by
    /// <c>GET /api/entities/{slug}</c> — search results
    /// (<c>GET /api/entities</c>) always return an empty list and the field
    /// is omitted from the JSON to keep responses compact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recent_episodes")]
    public IReadOnlyList<EntityEpisodeMention>? RecentEpisodes { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Wikidata QID for head entities (GH#161 linking) — the stable
    /// external join key. Omitted when unlinked (the long tail).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikidata_qid")]
    public string? WikidataQid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
