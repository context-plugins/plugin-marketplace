using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetImportInputLocation
{
    /// <summary>
    /// The name of the Amazon S3 bucket.
    /// </summary>
    [JsonPropertyName("s3BucketName")]
    public required string S3BucketName { get; init; }

    /// <summary>
    /// The path inside the Amazon S3 bucket pointing to the test-set CSV file.
    /// </summary>
    [JsonPropertyName("s3Path")]
    public required string S3Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
