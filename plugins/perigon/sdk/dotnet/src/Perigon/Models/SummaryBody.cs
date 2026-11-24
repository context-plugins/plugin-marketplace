using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Request body for the Search-Summarizer endpoint. Contains the user’s summary instructions, how many articles to include, which fields to use, the retrieval method, and LLM generation settings.
/// </summary>
public record SummaryBody
{
    /// <summary>
    /// Instructions guiding how the summary should be written. Maximum length: 2,048 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    public string? Prompt { get; init; } = "You are a helpful assistant tasked with summarizing the search results. In a casual, natural tone, craft a vivid, insightful synthesis in one fluid paragraph (no more than 125 words). Cover as many relevant points as possible, connect ideas, highlight themes, and surface anything interesting or surprising.";

    /// <summary>
    /// Maximum number of articles used to generate the summary. Must be between 1 and 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxArticleCount")]
    [Minimum(1)]
    [Maximum(100)]
    public int? MaxArticleCount { get; init; } = 10;

    /// <summary>
    /// Maximum number of articles returned in the response. Must be between 1 and 100 and cannot return more articles than maxArticleCount selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnedArticleCount")]
    [Minimum(1)]
    [Maximum(100)]
    public int? ReturnedArticleCount { get; init; } = 10;

    /// <summary>
    /// Which article fields to include when generating the summary. Up to three values from TITLE, CONTENT, SUMMARY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summarizeFields")]
    public IReadOnlyList<SummarizeField>? SummarizeFields { get; init; }

    /// <summary>
    /// Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS selects the first article from each of up to maxArticleCount stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public Method? Method { get; init; } = Method.Articles;

    /// <summary>
    /// The underlying LLM model to use for generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model? Model { get; init; } = Model.Gpt41;

    /// <summary>
    /// Sampling temperature from 0.0 to 2.0. Ignored by gpt-5.4-mini, gpt-5.4-nano, gpt-5-mini, and gpt-5-nano.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("temperature")]
    [Minimum(0.0)]
    [Maximum(2.0)]
    public double? Temperature { get; init; } = 0.7d;

    /// <summary>
    /// Nucleus sampling (top-p) for the LLM (0.0 to 1.0).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topP")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TopP { get; init; } = 1d;

    /// <summary>
    /// Maximum number of tokens to generate. Must be 0 or greater.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxTokens")]
    [Minimum(0)]
    public int? MaxTokens { get; init; } = 2048;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
