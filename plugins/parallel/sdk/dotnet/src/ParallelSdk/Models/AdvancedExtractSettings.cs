using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Advanced extract configuration.
/// <para>
/// These settings may impact result quality and latency unless used carefully.
/// See https://docs.parallel.ai/search/advanced-extract-settings for more info.
/// </para>
/// </summary>
public record AdvancedExtractSettings
{
    /// <summary>
    /// Fetch policy: determines when to return cached content from the index (faster) vs fetching live content (fresher). Default is to use a dynamic policy based on the search objective and url. Note: enabling live fetch significantly increases extract latency because it requires fetching content from source websites.
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
    /// Controls full content extraction. Set to true to enable with defaults, false to disable, or provide FullContentSettings for fine-grained control.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_content")]
    public FullContent1? FullContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
