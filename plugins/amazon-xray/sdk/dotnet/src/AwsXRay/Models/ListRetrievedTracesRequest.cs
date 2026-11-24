using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record ListRetrievedTracesRequest
{
    /// <summary>
    /// Retrieval token.
    /// </summary>
    [JsonPropertyName("RetrievalToken")]
    public required string RetrievalToken { get; init; }

    /// <summary>
    /// Format of the requested traces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TraceFormat")]
    public TraceFormat? TraceFormat { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of indexes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
