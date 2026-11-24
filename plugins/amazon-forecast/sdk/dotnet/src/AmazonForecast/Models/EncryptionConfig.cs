using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record EncryptionConfig
{
    /// <summary>
    /// The ARN of the IAM role that Amazon Forecast can assume to access the KMS key. Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an InvalidInputException error.
    /// </summary>
    [JsonPropertyName("RoleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the KMS key.
    /// </summary>
    [JsonPropertyName("KMSKeyArn")]
    public required string KmsKeyArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
