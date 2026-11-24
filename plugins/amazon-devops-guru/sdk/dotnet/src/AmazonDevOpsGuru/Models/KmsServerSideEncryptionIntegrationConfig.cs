using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record KmsServerSideEncryptionIntegrationConfig
{
    /// <summary>
    /// Describes the specified KMS key. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), Amazon Web Services KMS associates the alias with an Amazon Web Services managed key and returns its KeyId and Arn in the response. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-east-2:111122223333:key/
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKeyId")]
    public string? KmsKeyId { get; init; }

    /// <summary>
    /// Specifies if DevOps Guru is enabled for KMS integration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OptInStatus")]
    public OptInStatus3? OptInStatus { get; init; }

    /// <summary>
    /// The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeAmazonDevOpsGuruServiceIntegrationsApi? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
