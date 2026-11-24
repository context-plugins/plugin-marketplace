using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GrammarSlotTypeSource
{
    /// <summary>
    /// The name of the Amazon S3 bucket that contains the grammar source.
    /// </summary>
    [JsonPropertyName("s3BucketName")]
    public required string S3BucketName { get; init; }

    /// <summary>
    /// The path to the grammar in the Amazon S3 bucket.
    /// </summary>
    [JsonPropertyName("s3ObjectKey")]
    public required string S3ObjectKey { get; init; }

    /// <summary>
    /// The KMS key required to decrypt the contents of the grammar, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
