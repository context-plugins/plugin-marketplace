using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsResponse1
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// Empty means every event except the opt-in ones.
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<Event> Events { get; init; }

    [JsonPropertyName("format")]
    public required FormatDeliverdDevWebhookEndpointsApi Format { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// Consecutive failed deliveries. At twenty the endpoint is switched off.
    /// </summary>
    [JsonPropertyName("failureCount")]
    public required int FailureCount { get; init; }

    [JsonPropertyName("lastSuccessAt")]
    public required string? LastSuccessAt { get; init; }

    [JsonPropertyName("lastFailureAt")]
    public required string? LastFailureAt { get; init; }

    [JsonPropertyName("lastError")]
    public required string? LastError { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The signing secret (dlvw_…). Returned by this response only: no other call returns it, and it cannot be retrieved afterwards.
    /// </summary>
    [JsonPropertyName("secret")]
    public required string Secret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
