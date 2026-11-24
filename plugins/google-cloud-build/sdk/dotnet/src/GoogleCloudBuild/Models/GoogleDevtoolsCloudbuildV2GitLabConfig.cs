using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
/// </summary>
public record GoogleDevtoolsCloudbuildV2GitLabConfig
{
    /// <summary>
    /// Optional. SSL certificate to use for requests to GitLab Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslCa")]
    public string? SslCa { get; init; }

    /// <summary>
    /// Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookSecretSecretVersion")]
    public string? WebhookSecretSecretVersion { get; init; }

    /// <summary>
    /// Required. A GitLab personal access token with the <c>api</c> scope access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizerCredential")]
    public UserCredential3? AuthorizerCredential { get; init; }

    /// <summary>
    /// Output only. Version of the GitLab Enterprise server running on the <c>host_uri</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverVersion")]
    public string? ServerVersion { get; init; }

    /// <summary>
    /// Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceDirectoryConfig")]
    public GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1? ServiceDirectoryConfig { get; init; }

    /// <summary>
    /// Required. A GitLab personal access token with the minimum <c>read_api</c> scope access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readAuthorizerCredential")]
    public UserCredential4? ReadAuthorizerCredential { get; init; }

    /// <summary>
    /// Optional. The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostUri")]
    public string? HostUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
