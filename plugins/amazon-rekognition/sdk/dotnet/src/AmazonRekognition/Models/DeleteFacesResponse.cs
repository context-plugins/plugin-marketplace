using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteFacesResponse
{
    /// <summary>
    /// An array of strings (face IDs) of the faces that were deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DeletedFaces")]
    public IReadOnlyList<string>? DeletedFaces { get; init; }

    /// <summary>
    /// An array of any faces that weren't deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnsuccessfulFaceDeletions")]
    public IReadOnlyList<UnsuccessfulFaceDeletion>? UnsuccessfulFaceDeletions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
