using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Extract request.
/// </summary>
public record V1ExtractRequest
{
    /// <summary>
    /// URLs to extract content from. Up to 20 URLs.
    /// </summary>
    [JsonPropertyName("urls")]
    public required IReadOnlyList<string> Urls { get; init; }

    /// <summary>
    /// As in SearchRequest, a natural-language description of the underlying question or goal driving the request. Used together with search_queries to focus excerpts on the most relevant content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective")]
    public Objective? Objective { get; init; }

    /// <summary>
    /// Optional keyword search queries, as in SearchRequest. Used together with objective to focus excerpts on the most relevant content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_queries")]
    public SearchQueries? SearchQueries { get; init; }

    /// <summary>
    /// Upper bound on total characters across excerpts from all extracted results.
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
    /// Advanced configuration for fetch policy, excerpt settings, and full content settings. May impact result quality and latency unless used carefully. When omitted, excerpts are enabled and full content is disabled by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advanced_settings")]
    public AdvancedSettings? AdvancedSettings { get; init; }
}
