using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record AgentSearchRequest
{
    /// <summary>
    /// e.g. <c>government_meeting</c>, <c>court_hearing</c>, <c>podcast_episode</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_types")]
    public IReadOnlyList<string>? ContentTypes { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_from")]
    public string? DateFrom { get; init; }

    /// <summary>
    /// YYYY-MM-DD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_to")]
    public string? DateTo { get; init; }

    /// <summary>
    /// 1–10 results (default 5).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// What to find, 1–300 characters.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// <c>text</c> (default) or <c>semantic</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_type")]
    public string? SearchType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
