using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record InvalidateProjectCacheInput
{
    /// <summary>
    /// The name of the CodeBuild build project that the cache is reset for.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
