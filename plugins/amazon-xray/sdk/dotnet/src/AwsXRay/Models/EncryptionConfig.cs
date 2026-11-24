using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record EncryptionConfig
{
    /// <summary>
    /// The ID of the KMS key used for encryption, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyId")]
    public string? KeyId { get; init; }

    /// <summary>
    /// The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status? Status { get; init; }

    /// <summary>
    /// The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default encryption.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeEnum? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
