using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GatesCancelResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevGatesApi Status { get; init; }

    [JsonPropertyName("allowed")]
    public required bool Allowed { get; init; }

    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object> Input { get; init; }

    [JsonPropertyName("changes")]
    public required IReadOnlyList<Change> Changes { get; init; }

    [JsonPropertyName("basis")]
    public required Basis Basis { get; init; }

    [JsonPropertyName("reason")]
    public required string? Reason { get; init; }

    [JsonPropertyName("rule")]
    public required string? Rule { get; init; }

    [JsonPropertyName("policyVersionId")]
    public required Guid? PolicyVersionId { get; init; }

    [JsonPropertyName("approvalId")]
    public required Guid? ApprovalId { get; init; }

    [JsonPropertyName("approvalUrl")]
    public required string? ApprovalUrl { get; init; }

    [JsonPropertyName("outcome")]
    public required Outcome? Outcome { get; init; }

    [JsonPropertyName("settledAt")]
    public required string? SettledAt { get; init; }

    [JsonPropertyName("concerns")]
    public required IReadOnlyList<Concern> Concerns { get; init; }

    [JsonPropertyName("reused")]
    public required bool Reused { get; init; }

    [JsonPropertyName("decision")]
    public required DecisionDeliverdDevGatesApi Decision { get; init; }

    [JsonPropertyName("canExecute")]
    public required bool CanExecute { get; init; }

    [JsonPropertyName("blockedBecause")]
    public required string? BlockedBecause { get; init; }

    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("authorisation")]
    public required Authorisation Authorisation { get; init; }

    [JsonPropertyName("actionId")]
    public required string ActionId { get; init; }

    [JsonPropertyName("agentId")]
    public required string? AgentId { get; init; }

    [JsonPropertyName("flowId")]
    public required string? FlowId { get; init; }

    [JsonPropertyName("supersedesGateId")]
    public required string? SupersedesGateId { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("requestedBy")]
    public required string RequestedBy { get; init; }

    [JsonPropertyName("createdAt")]
    public required string? CreatedAt { get; init; }

    /// <summary>
    /// The yes, signed with this deployment's Ed25519 key, while <c>canExecute</c> is true. Hand it to the code that performs the action, which verifies it before acting. Null otherwise
    /// </summary>
    [JsonPropertyName("decisionToken")]
    public required string? DecisionToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackSecret")]
    public string? CallbackSecret { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executions")]
    public IReadOnlyList<Execution1>? Executions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
