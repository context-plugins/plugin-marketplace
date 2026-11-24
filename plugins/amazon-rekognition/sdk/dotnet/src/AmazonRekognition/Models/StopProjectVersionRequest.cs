using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StopProjectVersionRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the model version that you want to stop. This operation requires permissions to perform the rekognition:StopProjectVersion action.
    /// </summary>
    [JsonPropertyName("ProjectVersionArn")]
    public required string ProjectVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
