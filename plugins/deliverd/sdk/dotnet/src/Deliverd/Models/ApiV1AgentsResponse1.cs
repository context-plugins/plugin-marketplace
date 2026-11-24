using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1AgentsResponse1
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    [JsonPropertyName("providerAgentId")]
    public required string? ProviderAgentId { get; init; }

    [JsonPropertyName("environment")]
    public required string? Environment { get; init; }

    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("registeredVia")]
    public required string RegisteredVia { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("recentGates")]
    public required IReadOnlyList<RecentGate> RecentGates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
