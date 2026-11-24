using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ActionModel
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("actionId")]
    public required string ActionId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("inputSchema")]
    public required IReadOnlyDictionary<string, object> InputSchema { get; init; }

    [JsonPropertyName("editableFields")]
    public required IReadOnlyList<string> EditableFields { get; init; }

    [JsonPropertyName("displayTitle")]
    public required string? DisplayTitle { get; init; }

    [JsonPropertyName("riskCategory")]
    public required RiskCategory1 RiskCategory { get; init; }

    [JsonPropertyName("defaultRisk")]
    public required DefaultRisk1 DefaultRisk { get; init; }

    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
