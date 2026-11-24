using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetBuildsOutput
{
    /// <summary>
    /// Information about the requested builds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("builds")]
    public IReadOnlyList<BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>? Builds { get; init; }

    /// <summary>
    /// The IDs of builds for which information could not be found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildsNotFound")]
    public IReadOnlyList<string>? BuildsNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
