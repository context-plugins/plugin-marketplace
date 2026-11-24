using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteCollectionRequest
{
    /// <summary>
    /// ID of the collection to delete.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
