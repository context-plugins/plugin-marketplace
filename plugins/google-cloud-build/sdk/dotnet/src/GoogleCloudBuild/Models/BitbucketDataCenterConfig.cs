using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Configuration for connections to Bitbucket Data Center.
/// </summary>
public record BitbucketDataCenterConfig
{
    /// <summary>
    /// Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookSecretSecretVersion")]
    public string? WebhookSecretSecretVersion { get; init; }

    /// <summary>
    /// Output only. Version of the Bitbucket Data Center running on the <c>host_uri</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverVersion")]
    public string? ServerVersion { get; init; }

    /// <summary>
    /// Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceDirectoryConfig")]
    public GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4? ServiceDirectoryConfig { get; init; }

    /// <summary>
    /// Required. The URI of the Bitbucket Data Center instance or cluster this connection is for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostUri")]
    public string? HostUri { get; init; }

    /// <summary>
    /// Optional. SSL certificate to use for requests to the Bitbucket Data Center.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslCa")]
    public string? SslCa { get; init; }

    /// <summary>
    /// Required. A http access token with the <c>REPO_ADMIN</c> scope access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizerCredential")]
    public UserCredential1? AuthorizerCredential { get; init; }

    /// <summary>
    /// Required. A http access token with the <c>REPO_READ</c> access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readAuthorizerCredential")]
    public UserCredential2? ReadAuthorizerCredential { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
