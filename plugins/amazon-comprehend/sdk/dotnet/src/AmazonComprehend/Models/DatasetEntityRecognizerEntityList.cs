using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DatasetEntityRecognizerEntityList
{
    /// <summary>
    /// Specifies the Amazon S3 location where the entity list is located.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
