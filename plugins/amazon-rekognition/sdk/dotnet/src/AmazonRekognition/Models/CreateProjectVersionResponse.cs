using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateProjectVersionResponse
{
    /// <summary>
    /// The ARN of the model or the project version that was created. Use DescribeProjectVersion to get the current status of the training operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectVersionArn")]
    public string? ProjectVersionArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
