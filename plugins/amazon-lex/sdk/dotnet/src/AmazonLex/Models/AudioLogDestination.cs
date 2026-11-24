using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AudioLogDestination
{
    [JsonPropertyName("s3Bucket")]
    public required S3BucketLogDestination S3Bucket { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
