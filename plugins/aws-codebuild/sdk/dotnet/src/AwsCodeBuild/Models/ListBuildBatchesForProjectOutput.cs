using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ListBuildBatchesForProjectOutput
{
    /// <summary>
    /// An array of strings that contains the batch build identifiers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    /// <summary>
    /// If there are more items to return, this contains a token that is passed to a subsequent call to ListBuildBatchesForProject to retrieve the next set of items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
