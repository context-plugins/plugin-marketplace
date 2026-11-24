using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TraceSegmentsRequest
{
    /// <summary>
    /// A string containing a JSON document defining one or more segments or subsegments.
    /// </summary>
    [JsonPropertyName("TraceSegmentDocuments")]
    public required IReadOnlyList<string> TraceSegmentDocuments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
