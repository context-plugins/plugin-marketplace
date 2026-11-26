using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Create a bill approval policy
/// </summary>
public record BillApprovalPolicyRequestDto
{
    /// <summary>
    /// Bill approval policy name
    /// </summary>
    [JsonPropertyName("policyName")]
    public required string PolicyName { get; init; }

    /// <summary>
    /// Bill approval policy rules. You can set multiple rules for a policy.
    /// <para>
    /// <b>Note</b>: Policy rules are applied in the specified order.
    /// </para>
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<BillApprovalPolicyCreateRuleDto> Rules { get; init; }

    /// <summary>
    /// List of approvers. For each approver, set the BILL-generated ID of the user. The value begins with <c>006</c>.
    /// <para>
    /// <b>Note</b>: BILL requests approvals in the specified order.
    /// </para>
    /// </summary>
    [JsonPropertyName("approvers")]
    public required IReadOnlyList<string> Approvers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
