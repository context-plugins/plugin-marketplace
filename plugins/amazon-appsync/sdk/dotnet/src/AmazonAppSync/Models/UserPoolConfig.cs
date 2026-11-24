using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record UserPoolConfig
{
    /// <summary>
    /// The user pool ID.
    /// </summary>
    [JsonPropertyName("userPoolId")]
    public required string UserPoolId { get; init; }

    /// <summary>
    /// The Amazon Web Services Region in which the user pool was created.
    /// </summary>
    [JsonPropertyName("awsRegion")]
    public required string AwsRegion { get; init; }

    /// <summary>
    /// The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
    /// </summary>
    [JsonPropertyName("defaultAction")]
    public required DefaultAction DefaultAction { get; init; }

    /// <summary>
    /// A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appIdClientRegex")]
    public string? AppIdClientRegex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
