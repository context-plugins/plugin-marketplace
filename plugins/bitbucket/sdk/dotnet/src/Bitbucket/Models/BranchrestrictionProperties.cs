using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record BranchrestrictionProperties
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links? Links { get; init; }

    /// <summary>
    /// The branch restriction status' id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// The type of restriction that is being applied.
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// Indicates how the restriction is matched against a branch. The default is <c>glob</c>.
    /// </summary>
    [JsonPropertyName("branch_match_kind")]
    public required BranchMatchKind BranchMatchKind { get; init; }

    /// <summary>
    /// Apply the restriction to branches of this type. Active when <c>branch_match_kind</c> is <c>branching_model</c>. The branch type will be calculated using the branching model configured for the repository.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch_type")]
    public BranchType? BranchType { get; init; }

    /// <summary>
    /// Apply the restriction to branches that match this pattern. Active when <c>branch_match_kind</c> is <c>glob</c>. Will be empty when <c>branch_match_kind</c> is <c>branching_model</c>.
    /// </summary>
    [JsonPropertyName("pattern")]
    public required string Pattern { get; init; }

    /// <summary>
    /// Value with kind-specific semantics:
    /// <list type="bullet">
    ///   <item><description><c>require_approvals_to_merge</c> uses it to require a minimum number of approvals on a PR.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>require_default_reviewer_approvals_to_merge</c> uses it to require a minimum number of approvals from default reviewers on a PR.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>require_passing_builds_to_merge</c> uses it to require a minimum number of passing builds.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>require_commits_behind</c> uses it to require the current branch is up to a maximum number of commits behind it destination.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public int? Value { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("users")]
    [MinLength(0)]
    public IReadOnlyList<Account>? Users { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groups")]
    [MinLength(0)]
    public IReadOnlyList<Group>? Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
