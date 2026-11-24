using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record GetResourceCollectionResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public ResourceCollectionFilter? ResourceCollection { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
