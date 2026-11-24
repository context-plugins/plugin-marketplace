using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteWebhookInput
{
    /// <summary>
    /// The name of the CodeBuild project.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
