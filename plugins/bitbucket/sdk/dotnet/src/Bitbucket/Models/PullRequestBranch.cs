using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record PullRequestBranch
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Available merge strategies, when this endpoint is the destination of the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_strategies")]
    public IReadOnlyList<MergeStrategy>? MergeStrategies { get; init; }

    /// <summary>
    /// The default merge strategy, when this endpoint is the destination of the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_merge_strategy")]
    public string? DefaultMergeStrategy { get; init; }
}
