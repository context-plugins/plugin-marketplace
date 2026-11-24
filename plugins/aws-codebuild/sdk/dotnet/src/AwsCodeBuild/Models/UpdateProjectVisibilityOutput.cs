using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record UpdateProjectVisibilityOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectArn")]
    public string? ProjectArn { get; init; }

    /// <summary>
    /// Contains the project identifier used with the public build APIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicProjectAlias")]
    public string? PublicProjectAlias { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectVisibility")]
    public ProjectVisibility? ProjectVisibility { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
