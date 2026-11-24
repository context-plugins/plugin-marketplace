using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteStreamProcessorRequest
{
    /// <summary>
    /// The name of the stream processor you want to delete.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
