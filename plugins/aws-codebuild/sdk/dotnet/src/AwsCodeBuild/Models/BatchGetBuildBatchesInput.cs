using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetBuildBatchesInput
{
    /// <summary>
    /// An array that contains the batch build identifiers to retrieve.
    /// </summary>
    [JsonPropertyName("ids")]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
