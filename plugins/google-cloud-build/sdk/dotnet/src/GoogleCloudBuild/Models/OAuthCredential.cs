using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Represents an OAuth token of the account that authorized the Connection, and associated metadata.
/// </summary>
public record OAuthCredential
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
