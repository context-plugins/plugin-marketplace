using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record UpdateProjectVisibilityInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the build project.
    /// </summary>
    [JsonPropertyName("projectArn")]
    public required string ProjectArn { get; init; }

    [JsonPropertyName("projectVisibility")]
    public required ProjectVisibility ProjectVisibility { get; init; }

    /// <summary>
    /// The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceAccessRole")]
    public string? ResourceAccessRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
