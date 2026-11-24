using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetSandboxesInput
{
    /// <summary>
    /// A comma separated list of sandboxIds or sandboxArns.
    /// </summary>
    [JsonPropertyName("ids")]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
