using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record PullRequestBuildPolicy
{
    /// <summary>
    /// Specifies when comment-based approval is required before triggering a build on pull requests. This setting determines whether builds run automatically or require explicit approval through comments. DISABLED: Builds trigger automatically without requiring comment approval ALL_PULL_REQUESTS: All pull requests require comment approval before builds execute (unless contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from forked repositories require comment approval (unless contributor is one of the approver roles)
    /// </summary>
    [JsonPropertyName("requiresCommentApproval")]
    public required RequiresCommentApproval RequiresCommentApproval { get; init; }

    /// <summary>
    /// List of repository roles that have approval privileges for pull request builds when comment approval is required. Only users with these roles can provide valid comment approvals. If a pull request contributor is one of these roles, their pull request builds will trigger automatically. This field is only applicable when requiresCommentApproval is not DISABLED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approverRoles")]
    public IReadOnlyList<ApproverRole>? ApproverRoles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
