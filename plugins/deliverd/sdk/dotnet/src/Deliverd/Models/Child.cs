using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Child
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevFlowsApi Status { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object> Metadata { get; init; }

    [JsonPropertyName("startedBy")]
    public required string StartedBy { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("settledAt")]
    public required string? SettledAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
