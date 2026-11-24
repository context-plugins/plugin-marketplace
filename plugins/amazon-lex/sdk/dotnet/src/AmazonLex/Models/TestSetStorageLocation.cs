using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetStorageLocation
{
    /// <summary>
    /// The name of the Amazon S3 bucket in which the test set is stored.
    /// </summary>
    [JsonPropertyName("s3BucketName")]
    public required string S3BucketName { get; init; }

    /// <summary>
    /// The path inside the Amazon S3 bucket where the test set is stored.
    /// </summary>
    [JsonPropertyName("s3Path")]
    public required string S3Path { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting the test set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
