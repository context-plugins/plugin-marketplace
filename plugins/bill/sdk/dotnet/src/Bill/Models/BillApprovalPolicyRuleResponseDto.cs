using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Rules for a bill approval policy.
/// </summary>
public record BillApprovalPolicyRuleResponseDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public RuleKeyResponse? Key { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("op")]
    public BillApprovalRuleOperatorResponse? Op { get; init; }

    /// <summary>
    /// Rule values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<RuleValueDto>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
