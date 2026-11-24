using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteProjectVersionRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project version that you want to delete.
    /// </summary>
    [JsonPropertyName("ProjectVersionArn")]
    public required string ProjectVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
