using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1FlowsCancelResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevFlowsApi Status { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object> Metadata { get; init; }

    [JsonPropertyName("startedBy")]
    public required string StartedBy { get; init; }

    [JsonPropertyName("members")]
    public required IReadOnlyList<Member> Members { get; init; }

    [JsonPropertyName("memberCount")]
    public required double MemberCount { get; init; }

    [JsonPropertyName("openCount")]
    public required double OpenCount { get; init; }

    [JsonPropertyName("allSettled")]
    public required bool AllSettled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeline")]
    public IReadOnlyList<Timeline>? Timeline { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("children")]
    public IReadOnlyList<Child>? Children { get; init; }

    [JsonPropertyName("settledAt")]
    public required string? SettledAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("parentFlowId")]
    public required Guid? ParentFlowId { get; init; }

    [JsonPropertyName("providerExecutionId")]
    public required string? ProviderExecutionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
