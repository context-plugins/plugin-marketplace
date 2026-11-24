using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

/// <summary>
/// Response body returned when an opt-out subscription is created successfully
/// </summary>
public record OptOutSubscriptionResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("entityType")]
    public string EntityType { get; } = "contact";

    [JsonPropertyName("entityId")]
    public required string EntityId { get; init; }

    [JsonPropertyName("signalTypes")]
    public required IReadOnlyList<string> SignalTypes { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonPropertyName("isActive")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
