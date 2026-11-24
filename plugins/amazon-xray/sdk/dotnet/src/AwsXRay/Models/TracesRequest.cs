using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TracesRequest
{
    /// <summary>
    /// Specify the trace IDs of requests for which to retrieve segments.
    /// </summary>
    [JsonPropertyName("TraceIds")]
    public required IReadOnlyList<string> TraceIds { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
