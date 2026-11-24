using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Required. An access token with the <c>repository</c> access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate the credentials.
/// </summary>
public record UserCredential6
{
    /// <summary>
    /// Output only. The username associated to this token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userTokenSecretVersion")]
    public string? UserTokenSecretVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
