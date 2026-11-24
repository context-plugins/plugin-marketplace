using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CustomerUser
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("externalId")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("customerExternalId")]
    public required string CustomerExternalId { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("email")]
    public required string? Email { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonPropertyName("status")]
    public required CustomerUserStatus Status { get; init; }

    [JsonPropertyName("created")]
    public required bool Created { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
