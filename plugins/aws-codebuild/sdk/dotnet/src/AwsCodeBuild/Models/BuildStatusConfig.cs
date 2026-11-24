using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BuildStatusConfig
{
    /// <summary>
    /// Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider. Bitbucket This parameter is used for the name parameter in the Bitbucket commit status. For more information, see build in the Bitbucket API documentation. GitHub/GitHub Enterprise Server This parameter is used for the context parameter in the GitHub commit status. For more information, see Create a commit status in the GitHub developer guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public string? Context { get; init; }

    /// <summary>
    /// Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider. Bitbucket This parameter is used for the url parameter in the Bitbucket commit status. For more information, see build in the Bitbucket API documentation. GitHub/GitHub Enterprise Server This parameter is used for the target_url parameter in the GitHub commit status. For more information, see Create a commit status in the GitHub developer guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetUrl")]
    public string? TargetUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
