using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Response DTO for bill approval policy.
/// </summary>
public record BillApprovalPolicyResponseDto
{
    /// <summary>
    /// BILL-generated ID of the approval policy. The value is in the <c>{organization_id}-{unique_id}</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Bill approval policy name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policyName")]
    public string? PolicyName { get; init; }

    /// <summary>
    /// Bill approval policy status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Bill approval policy rules
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public IReadOnlyList<BillApprovalPolicyRuleResponseDto>? Rules { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvers")]
    public Approvers? Approvers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
