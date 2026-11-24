using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Represents a personal access token that authorized the Connection, and associated metadata.
/// </summary>
public record UserCredential
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
