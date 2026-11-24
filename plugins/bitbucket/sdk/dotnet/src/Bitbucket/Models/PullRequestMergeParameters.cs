using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// The metadata that describes a pull request merge.
/// </summary>
public record PullRequestMergeParameters
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The commit message that will be used on the resulting commit. Note that the size of the message is limited to 128 KiB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Whether the source branch should be deleted. If this is not provided, we fallback to the value used when the pull request was created, which defaults to False
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_source_branch")]
    public bool? CloseSourceBranch { get; init; }

    /// <summary>
    /// The merge strategy that will be used to merge the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_strategy")]
    public MergeStrategy2? MergeStrategy { get; init; } = MergeStrategy2.MergeCommit;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
