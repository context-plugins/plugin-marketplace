using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DescribeStreamProcessorRequest
{
    /// <summary>
    /// Name of the stream processor for which you want information.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
