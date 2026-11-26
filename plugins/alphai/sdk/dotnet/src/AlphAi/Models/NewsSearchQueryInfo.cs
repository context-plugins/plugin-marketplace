using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// How <c>/api/news/search/</c> read the query.
/// </summary>
public record NewsSearchQueryInfo
{
    /// <summary>
    /// See the endpoint description.
    /// </summary>
    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    /// <summary>
    /// <c>relevance</c> (ranked) or <c>published</c> (newest first) — the latter when every word is too common to rank on.
    /// </summary>
    [JsonPropertyName("sort")]
    public required Sort Sort { get; init; }

    /// <summary>
    /// The normalized words that were searched.
    /// </summary>
    [JsonPropertyName("terms")]
    public required IReadOnlyList<string> Terms { get; init; }

    /// <summary>
    /// In <c>broadened</c> mode, the words at least one of which every row carries, when the search reports them; empty otherwise (the current engine does not — <c>search_match.terms_matched</c> on each item is the count to trust).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required_terms")]
    public IReadOnlyList<string>? RequiredTerms { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("optional_terms")]
    public IReadOnlyList<string>? OptionalTerms { get; init; }

    /// <summary>
    /// Start of the searched window (your archive horizon, or <c>from_date</c> if later).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("window_from")]
    public DateTimeOffset? WindowFrom { get; init; }

    /// <summary>
    /// One sentence for an agent to act on — what selected the rows, and what they are not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
