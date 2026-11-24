using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1ApisSchemacreationRequest
{
    /// <summary>
    /// The schema definition, in GraphQL schema language format.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
