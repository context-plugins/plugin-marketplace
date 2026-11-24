using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record GetRetrievedTracesGraphResult
{
    /// <summary>
    /// Status of the retrieval.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetrievalStatus")]
    public RetrievalStatus? RetrievalStatus { get; init; }

    /// <summary>
    /// Retrieved services.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Services")]
    public IReadOnlyList<RetrievedService>? Services { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of indexes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
