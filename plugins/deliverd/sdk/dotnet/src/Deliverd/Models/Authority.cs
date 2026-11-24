using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Authority
{
    [JsonPropertyName("action")]
    public required string Action { get; init; }

    [JsonPropertyName("mode")]
    public required ModeDeliverdDevTasksApi Mode { get; init; }

    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonPropertyName("reason")]
    public required string Reason { get; init; }

    [JsonPropertyName("agentId")]
    public required Guid? AgentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
