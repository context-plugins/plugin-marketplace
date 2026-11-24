using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DistributeDataset
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset that you want to use.
    /// </summary>
    [JsonPropertyName("Arn")]
    public required string Arn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
