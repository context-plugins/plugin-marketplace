using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record RetrievedTrace
{
    /// <summary>
    /// The unique identifier for the span.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The length of time in seconds between the start time of the root span and the end time of the last span that completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Duration")]
    public double? Duration { get; init; }

    /// <summary>
    /// Spans that comprise the trace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Spans")]
    public IReadOnlyList<SpanModel>? Spans { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
