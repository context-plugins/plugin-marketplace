using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Configuration for connections to an instance of GitHub Enterprise.
/// </summary>
public record GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig
{
    /// <summary>
    /// Required. The URI of the GitHub Enterprise host this connection is for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostUri")]
    public string? HostUri { get; init; }

    /// <summary>
    /// Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookSecretSecretVersion")]
    public string? WebhookSecretSecretVersion { get; init; }

    /// <summary>
    /// Required. API Key used for authentication of webhook events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiKey")]
    public string? ApiKey { get; init; }

    /// <summary>
    /// Optional. The URL-friendly name of the GitHub App.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appSlug")]
    public string? AppSlug { get; init; }

    /// <summary>
    /// Optional. SSL certificate to use for requests to GitHub Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslCa")]
    public string? SslCa { get; init; }

    /// <summary>
    /// Optional. SecretManager resource containing the private key of the GitHub App, formatted as <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateKeySecretVersion")]
    public string? PrivateKeySecretVersion { get; init; }

    /// <summary>
    /// Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceDirectoryConfig")]
    public GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2? ServiceDirectoryConfig { get; init; }

    /// <summary>
    /// Optional. ID of the installation of the GitHub App.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appInstallationId")]
    public string? AppInstallationId { get; init; }

    /// <summary>
    /// Optional. Id of the GitHub App created from the manifest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appId")]
    public string? AppId { get; init; }

    /// <summary>
    /// Output only. GitHub Enterprise version installed at the host_uri.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverVersion")]
    public string? ServerVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
