using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record PostCallAnalyticsSettings
{
    /// <summary>
    /// The Amazon S3 location where you want your Call Analytics post-call transcription output stored. You can use any of the following formats to specify the output location: s3://DOC-EXAMPLE-BUCKET s3://DOC-EXAMPLE-BUCKET/my-output-folder/ s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json
    /// </summary>
    [JsonPropertyName("OutputLocation")]
    public required string OutputLocation { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
    /// </summary>
    [JsonPropertyName("DataAccessRoleArn")]
    public required string DataAccessRoleArn { get; init; }

    /// <summary>
    /// Specify whether you want only a redacted transcript or both a redacted and an unredacted transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the Amazon S3 output location you specify. Note that to include ContentRedactionOutput in your request, you must enable content redaction (ContentRedactionType).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentRedactionOutput")]
    public ContentRedactionOutput? ContentRedactionOutput { get; init; }

    /// <summary>
    /// The KMS key you want to use to encrypt your Call Analytics post-call output. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways: Use the KMS key ID itself. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Use an alias for the KMS key ID. For example, alias/ExampleAlias. Use the Amazon Resource Name (ARN) for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab. Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias. If using a key located i
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputEncryptionKMSKeyId")]
    public string? OutputEncryptionKmsKeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
