using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1DraftsResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("claimUrl")]
    public required string ClaimUrl { get; init; }

    [JsonPropertyName("expiresAt")]
    public required string ExpiresAt { get; init; }

    [JsonPropertyName("warnings")]
    public required IReadOnlyList<string> Warnings { get; init; }

    /// <summary>
    /// What to tell the person, in words.
    /// </summary>
    [JsonPropertyName("next")]
    public required string Next { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
