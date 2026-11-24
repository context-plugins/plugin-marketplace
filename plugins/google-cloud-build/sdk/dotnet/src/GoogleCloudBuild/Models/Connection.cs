using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center, Bitbucket Cloud or GitLab.
/// </summary>
public record Connection
{
    /// <summary>
    /// Output only. Installation state of the Connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installationState")]
    public InstallationState1? InstallationState { get; init; }

    /// <summary>
    /// Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitlabConfig")]
    public GoogleDevtoolsCloudbuildV2GitLabConfig? GitlabConfig { get; init; }

    /// <summary>
    /// Output only. Server assigned timestamp for when the connection was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled")]
    public bool? Disabled { get; init; }

    /// <summary>
    /// Configuration for connections to github.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("githubConfig")]
    public GitHubConfig? GithubConfig { get; init; }

    /// <summary>
    /// Output only. Server assigned timestamp for when the connection was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Configuration for connections to Bitbucket Cloud.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitbucketCloudConfig")]
    public BitbucketCloudConfig? BitbucketCloudConfig { get; init; }

    /// <summary>
    /// Configuration for connections to Bitbucket Data Center.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitbucketDataCenterConfig")]
    public BitbucketDataCenterConfig? BitbucketDataCenterConfig { get; init; }

    /// <summary>
    /// This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    /// <summary>
    /// Optional. Allows clients to store small amounts of arbitrary data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotations")]
    public IReadOnlyDictionary<string, string>? Annotations { get; init; }

    /// <summary>
    /// Configuration for connections to an instance of GitHub Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("githubEnterpriseConfig")]
    public GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig? GithubEnterpriseConfig { get; init; }

    /// <summary>
    /// Immutable. The resource name of the connection, in the format <c>projects/{project}/locations/{location}/connections/{connection_id}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Set to true when the connection is being set up or updated in the background.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reconciling")]
    public bool? Reconciling { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
