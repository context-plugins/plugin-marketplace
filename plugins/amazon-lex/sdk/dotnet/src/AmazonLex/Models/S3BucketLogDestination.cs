using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record S3BucketLogDestination
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
    /// </summary>
    [JsonPropertyName("s3BucketArn")]
    public required string S3BucketArn { get; init; }

    /// <summary>
    /// The S3 prefix to assign to audio log files.
    /// </summary>
    [JsonPropertyName("logPrefix")]
    public required string LogPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
