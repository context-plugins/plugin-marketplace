using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record AuthorizationConfig
{
    /// <summary>
    /// The authorization type that the HTTP endpoint requires. AWS_IAM: The authorization type is Signature Version 4 (SigV4).
    /// </summary>
    [JsonPropertyName("authorizationType")]
    public string AuthorizationType { get; } = "AWS_IAM";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsIamConfig")]
    public AwsIamConfig? AwsIamConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
