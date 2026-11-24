using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DatasetEntityRecognizerAnnotations
{
    /// <summary>
    /// Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
