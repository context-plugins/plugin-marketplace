using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record Trace
{
    /// <summary>
    /// The unique identifier for the request that generated the trace's segments and subsegments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Duration")]
    public double? Duration { get; init; }

    /// <summary>
    /// LimitExceeded is set to true when the trace has exceeded the Trace document size limit. For more information about this limit and other X-Ray limits and quotas, see Amazon Web Services X-Ray endpoints and quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LimitExceeded")]
    public bool? LimitExceeded { get; init; }

    /// <summary>
    /// Segment documents for the segments and subsegments that comprise the trace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
