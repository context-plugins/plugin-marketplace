using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record TopStories
{
    [JsonPropertyName("results")]
    [MaxLength(50)]
    public required IReadOnlyList<StoryCard> Results { get; init; }

    /// <summary>
    /// When the list was ranked.
    /// </summary>
    [JsonPropertyName("as_of")]
    public required DateTimeOffset AsOf { get; init; }

    /// <summary>
    /// The ranking formula's version; a change to the formula increments it.
    /// </summary>
    [JsonPropertyName("ranking_version")]
    public required int RankingVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
