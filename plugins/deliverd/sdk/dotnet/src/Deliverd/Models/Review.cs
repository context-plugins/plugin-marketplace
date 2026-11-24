using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Review
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackSecret")]
    public string? CallbackSecret { get; init; }

    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevReviewsApi Status { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("instructions")]
    public required string? Instructions { get; init; }

    [JsonPropertyName("reportId")]
    public required Guid? ReportId { get; init; }

    [JsonPropertyName("versionId")]
    public required Guid? VersionId { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object> Metadata { get; init; }

    [JsonPropertyName("requestedBy")]
    public required string RequestedBy { get; init; }

    [JsonPropertyName("requiredApprovals")]
    public required double RequiredApprovals { get; init; }

    [JsonPropertyName("reviewers")]
    public required IReadOnlyList<Reviewer> Reviewers { get; init; }

    [JsonPropertyName("verdicts")]
    public required IReadOnlyList<VerdictDeliverdDevReviewsApi> Verdicts { get; init; }

    [JsonPropertyName("threadCount")]
    public required double ThreadCount { get; init; }

    [JsonPropertyName("settledAt")]
    public required string? SettledAt { get; init; }

    [JsonPropertyName("expiresAt")]
    public required string? ExpiresAt { get; init; }

    [JsonPropertyName("agent")]
    public required Agent1? Agent { get; init; }

    [JsonPropertyName("model")]
    public required string? Model { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
