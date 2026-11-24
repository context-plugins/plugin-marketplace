using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record BatchGetTracesResult
{
    /// <summary>
    /// Full traces for the specified requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Traces")]
    public IReadOnlyList<Trace>? Traces { get; init; }

    /// <summary>
    /// Trace IDs of requests that haven't been processed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnprocessedTraceIds")]
    public IReadOnlyList<string>? UnprocessedTraceIds { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
