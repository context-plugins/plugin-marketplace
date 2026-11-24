using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.
/// </summary>
public record OAuthCredential1
{
    /// <summary>
    /// Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthTokenSecretVersion")]
    public string? OauthTokenSecretVersion { get; init; }

    /// <summary>
    /// Output only. The username associated to this token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
