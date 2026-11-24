using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record StopSandboxInput
{
    /// <summary>
    /// Information about the requested sandbox ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
