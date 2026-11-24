using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognizerAnnotations
{
    /// <summary>
    /// Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
    /// </summary>
    [JsonPropertyName("S3Uri")]
    public required string S3Uri { get; init; }

    /// <summary>
    /// Specifies the Amazon S3 location where the test annotations for an entity recognizer are located. The URI must be in the same Region as the API endpoint that you are calling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestS3Uri")]
    public string? TestS3Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
