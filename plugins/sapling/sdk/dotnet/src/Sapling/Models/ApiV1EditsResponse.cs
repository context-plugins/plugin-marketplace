using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1EditsResponse
{
    /// <summary>
    /// Present only on a partial result: a model stage could not process some sentences in time, so those sentences may be missing some or all of their corrections (a failed primary stage leaves a sentence unchecked; a failed secondary stage, e.g. neural spellcheck or postprocessing, drops only that stage's corrections). Every edit returned is still valid. Absent from a fully successful response. Retry the request (after a short backoff) for a complete result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("degraded")]
    public Degraded? Degraded { get; init; }

    /// <summary>
    /// Present only when the request sent return_usage: true. characters is the billable character count the request submitted; see the return_usage request field for the exact semantics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
