using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Source stats describing progress so far.
/// </summary>
public record TaskRunSourceStats2
{
    /// <summary>
    /// Number of sources considered in processing the task.
    /// </summary>
    [JsonPropertyName("num_sources_considered")]
    public required NumSourcesConsidered NumSourcesConsidered { get; init; }

    /// <summary>
    /// Number of sources read in processing the task.
    /// </summary>
    [JsonPropertyName("num_sources_read")]
    public required NumSourcesRead NumSourcesRead { get; init; }

    /// <summary>
    /// A sample of URLs of sources read in processing the task.
    /// </summary>
    [JsonPropertyName("sources_read_sample")]
    public required SourcesReadSample SourcesReadSample { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
