using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Configuration for connections to Bitbucket Cloud.
/// </summary>
public record BitbucketCloudConfig
{
    /// <summary>
    /// Required. An access token with the <c>webhook</c>, <c>repository</c>, <c>repository:admin</c> and <c>pullrequest</c> scope access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate these credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizerCredential")]
    public UserCredential5? AuthorizerCredential { get; init; }

    /// <summary>
    /// Required. An access token with the <c>repository</c> access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate the credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readAuthorizerCredential")]
    public UserCredential6? ReadAuthorizerCredential { get; init; }

    /// <summary>
    /// Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public string? Workspace { get; init; }

    /// <summary>
    /// Required. SecretManager resource containing the webhook secret used to verify webhook events, formatted as <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookSecretSecretVersion")]
    public string? WebhookSecretSecretVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
