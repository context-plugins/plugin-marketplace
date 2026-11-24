using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ApprovalsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackSecret")]
    public string? CallbackSecret { get; init; }

    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("risk")]
    public required Risk Risk { get; init; }

    [JsonPropertyName("factors")]
    public required IReadOnlyList<Factor1> Factors { get; init; }

    [JsonPropertyName("links")]
    public required IReadOnlyList<Link1> Links { get; init; }

    [JsonPropertyName("reportId")]
    public required Guid? ReportId { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object> Metadata { get; init; }

    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object>? Input { get; init; }

    [JsonPropertyName("editableFields")]
    public required IReadOnlyList<string> EditableFields { get; init; }

    [JsonPropertyName("approvedInput")]
    public required IReadOnlyDictionary<string, object>? ApprovedInput { get; init; }

    [JsonPropertyName("changes")]
    public required IReadOnlyList<Change> Changes { get; init; }

    [JsonPropertyName("concerns")]
    public required IReadOnlyList<Concern> Concerns { get; init; }

    [JsonPropertyName("requestedBy")]
    public required string RequestedBy { get; init; }

    [JsonPropertyName("approvers")]
    public required IReadOnlyList<Guid> Approvers { get; init; }

    [JsonPropertyName("requiredApprovals")]
    public required double RequiredApprovals { get; init; }

    [JsonPropertyName("approvalsSoFar")]
    public required double ApprovalsSoFar { get; init; }

    [JsonPropertyName("decidedBy")]
    public required string? DecidedBy { get; init; }

    [JsonPropertyName("decidedById")]
    public required Guid? DecidedById { get; init; }

    [JsonPropertyName("decidedAt")]
    public required string? DecidedAt { get; init; }

    [JsonPropertyName("note")]
    public required string? Note { get; init; }

    [JsonPropertyName("expiresAt")]
    public required string? ExpiresAt { get; init; }

    [JsonPropertyName("questions")]
    public required IReadOnlyList<Question> Questions { get; init; }

    [JsonPropertyName("recommendation")]
    public required Recommendation1? Recommendation { get; init; }

    [JsonPropertyName("agent")]
    public required Agent1? Agent { get; init; }

    [JsonPropertyName("model")]
    public required string? Model { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
