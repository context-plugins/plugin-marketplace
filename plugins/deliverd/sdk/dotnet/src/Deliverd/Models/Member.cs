using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Member
{
    [JsonPropertyName("kind")]
    public required KindDeliverdDevFlowsApi Kind { get; init; }

    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("open")]
    public required bool Open { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
