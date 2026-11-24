using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record RdsDataApiConfig
{
    /// <summary>
    /// The resource ARN of the RDS cluster.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The secret's ARN that was obtained from Secrets Manager. A secret consists of secret information, the secret value, plus metadata about the secret. A secret value can be a string or binary. It typically includes the ARN, secret name and description, policies, tags, encryption key from the Key Management Service, and key rotation data.
    /// </summary>
    [JsonPropertyName("secretArn")]
    public required string SecretArn { get; init; }

    /// <summary>
    /// The name of the database in the cluster.
    /// </summary>
    [JsonPropertyName("databaseName")]
    public required string DatabaseName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
