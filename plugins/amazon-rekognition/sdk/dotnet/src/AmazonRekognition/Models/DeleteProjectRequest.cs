using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteProjectRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project that you want to delete.
    /// </summary>
    [JsonPropertyName("ProjectArn")]
    public required string ProjectArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
