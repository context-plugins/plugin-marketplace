using System;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// Metadata for one stored credential. Bearers are stored as hashes and can never be listed.
/// </summary>
public record CredentialSummary
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("lastUsedAt")]
    public required DateTimeOffset? LastUsedAt { get; init; }

    [JsonPropertyName("expiresAt")]
    public required DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
