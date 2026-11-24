using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetBuildBatchesOutput
{
    /// <summary>
    /// An array of BuildBatch objects that represent the retrieved batch builds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatches")]
    public IReadOnlyList<BuildBatch>? BuildBatches { get; init; }

    /// <summary>
    /// An array that contains the identifiers of any batch builds that are not found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchesNotFound")]
    public IReadOnlyList<string>? BuildBatchesNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
