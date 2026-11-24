using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesSimulateRequest
{
    /// <summary>
    /// The registered action to test against
    /// </summary>
    [JsonPropertyName("actionId")]
    [MaxLength(120)]
    [RegularExpression("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")]
    public required string ActionId { get; init; }

    /// <summary>
    /// Arguments as an agent would send them. Validated against the action's schema first
    /// </summary>
    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object> Input { get; init; }

    /// <summary>
    /// Test as a particular agent, for rules that name one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentId")]
    public Guid? AgentId { get; init; }

    /// <summary>
    /// Test in a particular environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    [MaxLength(60)]
    public string? Environment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
