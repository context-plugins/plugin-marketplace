using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognizerEntityList
{
    /// <summary>
    /// Specifies the Amazon S3 location where the entity list is located. The URI must be in the same Region as the API endpoint that you are calling.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
