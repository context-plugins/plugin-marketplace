using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record UpdateLanguageModelRequest
{
    /// <summary>
    /// The name of the custom language model you want to update. Model names are case sensitive.
    /// </summary>
    [JsonPropertyName("ModelName")]
    public required string ModelName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role. If you include EncryptionConfiguration in your request, this role must have permissions to access the specified KMS key. If the role that you specify doesn't have the appropriate permissions, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
