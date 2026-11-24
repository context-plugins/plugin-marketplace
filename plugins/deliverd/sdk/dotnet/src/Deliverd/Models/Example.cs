using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Example
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("actionId")]
    public required string ActionId { get; init; }

    [JsonPropertyName("agentId")]
    public required string? AgentId { get; init; }

    [JsonPropertyName("environment")]
    public required string? Environment { get; init; }

    [JsonPropertyName("from")]
    public required From From { get; init; }

    [JsonPropertyName("to")]
    public required To To { get; init; }

    [JsonPropertyName("fromRule")]
    public required string? FromRule { get; init; }

    [JsonPropertyName("toRule")]
    public required string? ToRule { get; init; }

    [JsonPropertyName("outcome")]
    public required string? Outcome { get; init; }

    [JsonPropertyName("direction")]
    public required Direction Direction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
