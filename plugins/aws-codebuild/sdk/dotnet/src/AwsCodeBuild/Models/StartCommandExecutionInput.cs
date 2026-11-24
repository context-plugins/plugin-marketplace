using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record StartCommandExecutionInput
{
    /// <summary>
    /// A sandboxId or sandboxArn.
    /// </summary>
    [JsonPropertyName("sandboxId")]
    public required string SandboxId { get; init; }

    /// <summary>
    /// The command that needs to be executed.
    /// </summary>
    [JsonPropertyName("command")]
    public required string Command { get; init; }

    /// <summary>
    /// The command type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAwsCodeBuildCommandExecutionApi? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
