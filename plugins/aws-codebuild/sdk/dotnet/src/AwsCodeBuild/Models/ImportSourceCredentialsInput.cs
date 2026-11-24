using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ImportSourceCredentialsInput
{
    /// <summary>
    /// The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the authType CODECONNECTIONS, this is the connectionArn. For the authType SECRETS_MANAGER, this is the secretArn.
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// The source provider used for this project.
    /// </summary>
    [JsonPropertyName("serverType")]
    public required ServerType ServerType { get; init; }

    /// <summary>
    /// The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console.
    /// </summary>
    [JsonPropertyName("authType")]
    public required AuthType AuthType { get; init; }

    /// <summary>
    /// Set to false to prevent overwriting the repository source credentials. Set to true to overwrite the repository source credentials. The default value is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shouldOverwrite")]
    public bool? ShouldOverwrite { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
