using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1PoliciesSimulateResponse
{
    [JsonPropertyName("effect")]
    public required Effect Effect { get; init; }

    [JsonPropertyName("rule")]
    public required RuleDeliverdDevPoliciesApi? Rule { get; init; }

    [JsonPropertyName("reason")]
    public required string? Reason { get; init; }

    [JsonPropertyName("requiredApprovals")]
    public required double RequiredApprovals { get; init; }

    [JsonPropertyName("approvers")]
    public required IReadOnlyList<string> Approvers { get; init; }

    [JsonPropertyName("expiresInMinutes")]
    public required double? ExpiresInMinutes { get; init; }

    [JsonPropertyName("escalateAfterMinutes")]
    public required double? EscalateAfterMinutes { get; init; }

    [JsonPropertyName("policyVersionId")]
    public required Guid? PolicyVersionId { get; init; }

    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object> Input { get; init; }

    [JsonPropertyName("governed")]
    public required bool Governed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
