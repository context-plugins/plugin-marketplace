using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TraceGraphRequest
{
    /// <summary>
    /// Trace IDs of requests for which to generate a service graph.
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
