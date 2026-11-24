using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetBuildsInput
{
    /// <summary>
    /// The IDs of the builds.
    /// </summary>
    [JsonPropertyName("ids")]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
