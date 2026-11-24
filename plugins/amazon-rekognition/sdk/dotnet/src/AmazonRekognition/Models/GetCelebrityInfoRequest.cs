using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record GetCelebrityInfoRequest
{
    /// <summary>
    /// The ID for the celebrity. You get the celebrity ID from a call to the RecognizeCelebrities operation, which recognizes celebrities in an image.
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
