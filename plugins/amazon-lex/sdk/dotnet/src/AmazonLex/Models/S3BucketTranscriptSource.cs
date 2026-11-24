using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record S3BucketTranscriptSource
{
    /// <summary>
    /// The name of the bucket containing the transcript and the associated metadata.
    /// </summary>
    [JsonPropertyName("s3BucketName")]
    public required string S3BucketName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathFormat")]
    public PathFormat? PathFormat { get; init; }

    /// <summary>
    /// The format of the transcript content. Currently, Genie only supports the Amazon Lex transcript format.
    /// </summary>
    [JsonPropertyName("transcriptFormat")]
    public string TranscriptFormat { get; } = "Lex";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcriptFilter")]
    public TranscriptFilter? TranscriptFilter { get; init; }

    /// <summary>
    /// The ARN of the KMS key that customer use to encrypt their Amazon S3 bucket. Only use this field if your bucket is encrypted using a customer managed KMS key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
