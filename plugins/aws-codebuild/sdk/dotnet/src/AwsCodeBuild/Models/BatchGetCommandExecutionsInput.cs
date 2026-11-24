using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetCommandExecutionsInput
{
    /// <summary>
    /// A sandboxId or sandboxArn.
    /// </summary>
    [JsonPropertyName("sandboxId")]
    public required string SandboxId { get; init; }

    /// <summary>
    /// A comma separated list of commandExecutionIds.
    /// </summary>
    [JsonPropertyName("commandExecutionIds")]
    public required IReadOnlyList<string> CommandExecutionIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
