using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Search request.
/// </summary>
public record V1SearchRequest
{
    /// <summary>
    /// Natural-language description of the underlying question or goal driving the search. Used together with search_queries to focus results on the most relevant content. Should be self-contained with enough context to understand the intent of the search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective")]
    public Objective? Objective { get; init; }

    /// <summary>
    /// Concise keyword search queries, 3-6 words each. At least one query is required, provide 2-3 for best results. Used together with objective to focus results on the most relevant content.
    /// </summary>
    [JsonPropertyName("search_queries")]
    public required IReadOnlyList<string> SearchQueries { get; init; }

    /// <summary>
    /// Search mode preset: supported values are <c>turbo</c>, <c>fast</c>, <c>basic</c>, and <c>advanced</c>. Turbo mode is optimized for the fastest responses. Use Fast mode for high quality search within a 1-second latency budget. Basic mode offers low latency and works best with 2-3 high-quality search_queries. Advanced mode provides higher quality with more advanced retrieval and compression. Defaults to <c>advanced</c> when omitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode1? Mode { get; init; }

    /// <summary>
    /// Upper bound on total characters across excerpts from all results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_chars_total")]
    public MaxCharsTotal? MaxCharsTotal { get; init; }

    /// <summary>
    /// Session identifier to track calls across separate search and extract calls, to be used as part of a larger task. Specifying it may give better contextual results for subsequent API calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("session_id")]
    public SessionId? SessionId { get; init; }

    /// <summary>
    /// The model generating this request and consuming the results. Enables optimizations and tailors default settings for the model's capabilities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_model")]
    public ClientModel? ClientModel { get; init; }

    /// <summary>
    /// Advanced configuration for source policy, fetch policy, and excerpt settings. May impact result quality and latency unless used carefully. When omitted, excerpts are enabled by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advanced_settings")]
    public AdvancedSettingsParallelAiSearchApi? AdvancedSettings { get; init; }
}
