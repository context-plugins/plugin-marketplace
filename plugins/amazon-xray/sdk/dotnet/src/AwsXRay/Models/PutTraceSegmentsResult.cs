using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record PutTraceSegmentsResult
{
    /// <summary>
    /// Segments that failed processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnprocessedTraceSegments")]
    public IReadOnlyList<UnprocessedTraceSegment>? UnprocessedTraceSegments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
