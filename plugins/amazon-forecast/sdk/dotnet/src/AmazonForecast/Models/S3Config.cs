using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record S3Config
{
    /// <summary>
    /// The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.
    /// </summary>
    [JsonPropertyName("Path")]
    public required string Path { get; init; }

    /// <summary>
    /// The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket or files. If you provide a value for the KMSKeyArn key, the role must allow access to the key. Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an InvalidInputException error.
    /// </summary>
    [JsonPropertyName("RoleArn")]
    public required string RoleArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an Key Management Service (KMS) key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKeyArn")]
    public string? KmsKeyArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
