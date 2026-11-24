using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record SourceCredentialsInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or BITBUCKET.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverType")]
    public ServerType1? ServerType { get; init; }

    /// <summary>
    /// The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authType")]
    public AuthType1? AuthType { get; init; }

    /// <summary>
    /// The connection ARN if your authType is CODECONNECTIONS or SECRETS_MANAGER.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
