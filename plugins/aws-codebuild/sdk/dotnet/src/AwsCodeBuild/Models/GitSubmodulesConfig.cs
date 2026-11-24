using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record GitSubmodulesConfig
{
    /// <summary>
    /// Set to true to fetch Git submodules for your CodeBuild build project.
    /// </summary>
    [JsonPropertyName("fetchSubmodules")]
    public required bool FetchSubmodules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
