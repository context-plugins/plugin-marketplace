using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1DomainnamesApiassociationRequest
{
    /// <summary>
    /// The API ID. Private APIs can not be associated with custom domains.
    /// </summary>
    [JsonPropertyName("apiId")]
    public required string ApiId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
