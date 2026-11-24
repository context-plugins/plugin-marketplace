using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record ListRetrievedTracesResult
{
    /// <summary>
    /// Status of the retrieval.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetrievalStatus")]
    public RetrievalStatus? RetrievalStatus { get; init; }

    /// <summary>
    /// Format of the requested traces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TraceFormat")]
    public TraceFormat? TraceFormat { get; init; }

    /// <summary>
    /// Full traces for the specified requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Traces")]
    public IReadOnlyList<RetrievedTrace>? Traces { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of indexes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
