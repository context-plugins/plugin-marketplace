using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record StartSandboxConnectionInput
{
    /// <summary>
    /// A sandboxId or sandboxArn.
    /// </summary>
    [JsonPropertyName("sandboxId")]
    public required string SandboxId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
