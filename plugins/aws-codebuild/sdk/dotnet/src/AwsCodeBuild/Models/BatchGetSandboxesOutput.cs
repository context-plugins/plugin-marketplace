using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetSandboxesOutput
{
    /// <summary>
    /// Information about the requested sandboxes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sandboxes")]
    public IReadOnlyList<Sandbox>? Sandboxes { get; init; }

    /// <summary>
    /// The IDs of sandboxes for which information could not be found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sandboxesNotFound")]
    public IReadOnlyList<string>? SandboxesNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
