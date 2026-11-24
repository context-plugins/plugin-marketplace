using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GatesRequest
{
    /// <summary>
    /// The registered action you are about to perform
    /// </summary>
    [JsonPropertyName("actionId")]
    [MaxLength(120)]
    [RegularExpression("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")]
    public required string ActionId { get; init; }

    /// <summary>
    /// The arguments you will actually execute with. Validated against the action's registered schema before any rule is applied, and stored as validated — an approver sees these values and a rule is tested against them
    /// </summary>
    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object> Input { get; init; }

    /// <summary>
    /// Your id for this unit of work — <c>refund:ord_8812</c>. Required: a retry with the same id re-reads its decision instead of raising a second one, and no id Deliverd could invent would know which two calls are the same attempt
    /// </summary>
    [JsonPropertyName("externalId")]
    [StringLength(200, MinimumLength = 1)]
    public required string ExternalId { get; init; }

    /// <summary>
    /// Where this is running, for rules that distinguish staging from production
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    [MaxLength(60)]
    public string? Environment { get; init; }

    /// <summary>
    /// Why you are doing it, shown to whoever is asked to decide
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    [MaxLength(4000)]
    public string? Reason { get; init; }

    /// <summary>
    /// The flow this belongs to, if it is part of one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowId")]
    public Guid? FlowId { get; init; }

    /// <summary>
    /// What you are about to do, in a sentence a person deciding will read. Same as <c>reason</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// Where the act lands. Deliverd decides whether it is inside the organisation; only a workspace, report, user, group or an address at one of the organisation's own domains is internal
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public Destination? Destination { get; init; }

    /// <summary>
    /// How sensitive the data is. Can raise, never lower, what Deliverd already knows about a report it holds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classification")]
    public Classification? Classification { get; init; }

    /// <summary>
    /// How risky you judge it. Can raise, never lower, the action's own risk
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("risk")]
    public RiskDeliverdDevGatesApi? Risk { get; init; }

    /// <summary>
    /// What the act is about. An approval covers this artifact and no other: report a different hash when you record execution and it is refused as <c>approval_invalidated</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifact")]
    public Artifact? Artifact { get; init; }

    /// <summary>
    /// Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An agent key already says who it is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public AgentDeliverdDevGatesApi? Agent { get; init; }

    /// <summary>
    /// The run this belongs to, found by its id or started. Use instead of flowId
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("execution")]
    public Execution? Execution { get; init; }

    /// <summary>
    /// The request this revises, after a person asked for changes. Keeps the lineage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supersedesGateId")]
    public Guid? SupersedesGateId { get; init; }

    /// <summary>
    /// An https address to POST the gate's settlement and execution to, signed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Anything else a person deciding should see. Stored as your words; no rule reads it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
