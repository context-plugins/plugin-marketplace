using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Item
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("taskId")]
    public required Guid? TaskId { get; init; }

    [JsonPropertyName("aiSystemId")]
    public required Guid? AiSystemId { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("severity")]
    public required Severity Severity { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevGovernanceApi Status { get; init; }

    [JsonPropertyName("reportedByLabel")]
    public required string ReportedByLabel { get; init; }

    [JsonPropertyName("reportedAt")]
    public required DateTimeOffset ReportedAt { get; init; }

    [JsonPropertyName("resolution")]
    public required string? Resolution { get; init; }

    [JsonPropertyName("resolvedByLabel")]
    public required string? ResolvedByLabel { get; init; }

    [JsonPropertyName("resolvedAt")]
    public required DateTimeOffset? ResolvedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
