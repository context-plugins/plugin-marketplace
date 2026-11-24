using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DeleteEntityRecognizerRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the entity recognizer.
    /// </summary>
    [JsonPropertyName("EntityRecognizerArn")]
    public required string EntityRecognizerArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
