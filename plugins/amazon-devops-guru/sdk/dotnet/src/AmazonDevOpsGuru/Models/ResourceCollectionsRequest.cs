using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ResourceCollectionsRequest
{
    /// <summary>
    /// Specifies if the resource collection in the request is added or deleted to the resource collection.
    /// </summary>
    [JsonPropertyName("Action")]
    public required ActionEnum Action { get; init; }

    [JsonPropertyName("ResourceCollection")]
    public required UpdateResourceCollectionFilter ResourceCollection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
