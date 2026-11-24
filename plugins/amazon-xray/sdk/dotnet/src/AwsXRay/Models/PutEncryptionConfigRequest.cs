using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record PutEncryptionConfigRequest
{
    /// <summary>
    /// An Amazon Web Services KMS key in one of the following formats: Alias - The name of the key. For example, alias/MyKey. Key ID - The KMS key ID of the key. For example, ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. Amazon Web Services X-Ray does not support asymmetric KMS keys. ARN - The full Amazon Resource Name of the key ID or alias. For example, arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. Use this format to specify a key in a different account. Omit this key if you set Type to NONE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyId")]
    public string? KeyId { get; init; }

    /// <summary>
    /// The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default encryption.
    /// </summary>
    [JsonPropertyName("Type")]
    public required Type1 Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
