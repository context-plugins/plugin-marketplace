using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record BranchTypeBitbucketBranchingModelApi
{
    /// <summary>
    /// The kind of branch.
    /// </summary>
    [JsonPropertyName("kind")]
    public required KindBitbucketBranchingModelApi Kind { get; init; }

    /// <summary>
    /// The prefix for this branch type. A branch with this prefix will be classified as per <c>kind</c>. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or <c>null</c>.
    /// </summary>
    [JsonPropertyName("prefix")]
    public required string Prefix { get; init; }
}
