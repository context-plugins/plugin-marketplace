using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ListCuratedEnvironmentImagesOutput
{
    /// <summary>
    /// Information about supported platforms for Docker images that are managed by CodeBuild.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platforms")]
    public IReadOnlyList<EnvironmentPlatform>? Platforms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
