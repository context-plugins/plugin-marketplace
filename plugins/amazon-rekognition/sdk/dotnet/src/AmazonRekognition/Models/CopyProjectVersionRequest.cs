using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CopyProjectVersionRequest
{
    /// <summary>
    /// The ARN of the source project in the trusting AWS account.
    /// </summary>
    [JsonPropertyName("SourceProjectArn")]
    public required string SourceProjectArn { get; init; }

    /// <summary>
    /// The ARN of the model version in the source project that you want to copy to a destination project.
    /// </summary>
    [JsonPropertyName("SourceProjectVersionArn")]
    public required string SourceProjectVersionArn { get; init; }

    /// <summary>
    /// The ARN of the project in the trusted AWS account that you want to copy the model version to.
    /// </summary>
    [JsonPropertyName("DestinationProjectArn")]
    public required string DestinationProjectArn { get; init; }

    /// <summary>
    /// A name for the version of the model that's copied to the destination project.
    /// </summary>
    [JsonPropertyName("VersionName")]
    public required string VersionName { get; init; }

    [JsonPropertyName("OutputConfig")]
    public required OutputConfig OutputConfig { get; init; }

    /// <summary>
    /// The key-value tags to assign to the model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    /// <summary>
    /// The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training results and manifest files written to the output Amazon S3 bucket (OutputConfig). If you choose to use your own KMS key, you need the following permissions on the KMS key. kms:CreateGrant kms:DescribeKey kms:GenerateDataKey kms:Decrypt If you don't specify a value for KmsKeyId, images copied into the service are encrypted using a key that AWS owns and manages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
