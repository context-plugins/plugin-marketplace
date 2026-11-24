using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record AuthProvider
{
    /// <summary>
    /// The authorization type.
    /// </summary>
    [JsonPropertyName("authType")]
    public required AuthType AuthType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cognitoConfig")]
    public CognitoConfig? CognitoConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openIDConnectConfig")]
    public OpenIdConnectConfig? OpenIdConnectConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lambdaAuthorizerConfig")]
    public LambdaAuthorizerConfig? LambdaAuthorizerConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
