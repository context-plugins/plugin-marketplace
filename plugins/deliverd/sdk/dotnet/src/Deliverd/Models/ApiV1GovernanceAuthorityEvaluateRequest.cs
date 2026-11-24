using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GovernanceAuthorityEvaluateRequest
{
    [JsonPropertyName("action")]
    public required ActionDeliverdDevGovernanceApi Action { get; init; }

    /// <summary>
    /// An agent of this organisation; the requesting agent when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentId")]
    public Guid? AgentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
