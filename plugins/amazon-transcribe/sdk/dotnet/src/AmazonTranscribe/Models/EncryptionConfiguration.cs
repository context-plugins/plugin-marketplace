using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record EncryptionConfiguration
{
    /// <summary>
    /// A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see KMS encryption context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSEncryptionContext")]
    public IReadOnlyDictionary<string, string>? KmsEncryptionContext { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the KMS key you want to use to encrypt your resource artifacts. Only full KMS key ARN format is supported. KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more information, see KMS key ARNs.
    /// </summary>
    [JsonPropertyName("KMSKey")]
    public required string KmsKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
