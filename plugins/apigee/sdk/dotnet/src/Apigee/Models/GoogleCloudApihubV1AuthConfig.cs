using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// AuthConfig represents the authentication information.
/// </summary>
public record GoogleCloudApihubV1AuthConfig
{
    /// <summary>
    /// Google Service Account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleServiceAccountConfig")]
    public GoogleCloudApihubV1GoogleServiceAccountConfig1? GoogleServiceAccountConfig { get; init; }

    /// <summary>
    /// Oauth2.0 Client Credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauth2ClientCredentialsConfig")]
    public GoogleCloudApihubV1Oauth2ClientCredentialsConfig1? Oauth2ClientCredentialsConfig { get; init; }

    /// <summary>
    /// Api Key Config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiKeyConfig")]
    public GoogleCloudApihubV1ApiKeyConfig1? ApiKeyConfig { get; init; }

    /// <summary>
    /// User Password.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userPasswordConfig")]
    public GoogleCloudApihubV1UserPasswordConfig2? UserPasswordConfig { get; init; }

    /// <summary>
    /// Required. The authentication type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authType")]
    public AuthType? AuthType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
