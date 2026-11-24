using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteFacesRequest
{
    /// <summary>
    /// Collection from which to remove the specific faces.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// An array of face IDs to delete.
    /// </summary>
    [JsonPropertyName("FaceIds")]
    public required IReadOnlyList<string> FaceIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
