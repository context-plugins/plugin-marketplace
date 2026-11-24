using System.Text.Json.Serialization;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Advanced search configuration.
/// <para>
/// These settings may impact result quality and latency unless used carefully.
/// See https://docs.parallel.ai/search/advanced-search-settings for more info.
/// </para>
/// </summary>
public record AdvancedSearchSettings
{
    /// <summary>
    /// Domain and date filtering preferences for search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_policy")]
    public SourcePolicy1? SourcePolicy { get; init; }

    /// <summary>
    /// Fetch policy: determines when to return cached content from the index (faster) vs fetching live content (fresher). Default is to disable live fetch and return cached content from the index. Note: enabling live fetch significantly increases search latency because it requires fetching content from source websites.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fetch_policy")]
    public FetchPolicy1? FetchPolicy { get; init; }

    /// <summary>
    /// Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use defaults.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excerpt_settings")]
    public ExcerptSettings? ExcerptSettings { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code for geo-targeted search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationParallelAiSearchApi? Location { get; init; }

    /// <summary>
    /// Upper bound on the number of results to return. Defaults to 10 if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_results")]
    public MaxResults? MaxResults { get; init; }
}
