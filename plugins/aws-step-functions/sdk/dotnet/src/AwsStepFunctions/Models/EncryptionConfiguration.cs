using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record EncryptionConfiguration
{
    /// <summary>
    /// An alias, alias ARN, key ID, or key ARN of a symmetric encryption KMS key to encrypt data. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// Maximum duration that Step Functions will reuse data keys. When the period expires, Step Functions will call GenerateDataKey. Only applies to customer managed keys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsDataKeyReusePeriodSeconds")]
    public int? KmsDataKeyReusePeriodSeconds { get; init; }

    /// <summary>
    /// Encryption type
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
