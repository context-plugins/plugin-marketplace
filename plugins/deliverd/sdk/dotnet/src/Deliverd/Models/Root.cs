using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Root
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("kind")]
    public required KindDeliverdDevTasksApi Kind { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevTasksApi Status { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("objective")]
    public required string Objective { get; init; }

    [JsonPropertyName("rootTaskId")]
    public required Guid RootTaskId { get; init; }

    [JsonPropertyName("parentTaskId")]
    public required Guid? ParentTaskId { get; init; }

    [JsonPropertyName("depth")]
    public required double Depth { get; init; }

    [JsonPropertyName("workspaceId")]
    public required Guid? WorkspaceId { get; init; }

    [JsonPropertyName("flowId")]
    public required Guid? FlowId { get; init; }

    [JsonPropertyName("state")]
    public required State1 State { get; init; }

    [JsonPropertyName("snapshot")]
    public required IReadOnlyDictionary<string, object>? Snapshot { get; init; }

    [JsonPropertyName("result")]
    public required IReadOnlyDictionary<string, object>? Result { get; init; }

    [JsonPropertyName("previousResults")]
    public required IReadOnlyList<object> PreviousResults { get; init; }

    [JsonPropertyName("outcome")]
    public required OutcomeDeliverdDevTasksApi? Outcome { get; init; }

    [JsonPropertyName("origin")]
    public required Origin Origin { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("sessionUrl")]
    public required string? SessionUrl { get; init; }

    [JsonPropertyName("version")]
    public required double Version { get; init; }

    [JsonPropertyName("startedBy")]
    public required string StartedBy { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("completedAt")]
    public required string? CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sideTasks")]
    public SideTasks? SideTasks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public IReadOnlyList<Path>? Path { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("children")]
    public IReadOnlyList<object>? Children { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("findings")]
    public IReadOnlyList<object>? Findings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyList<LinkDeliverdDevTasksApi>? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
