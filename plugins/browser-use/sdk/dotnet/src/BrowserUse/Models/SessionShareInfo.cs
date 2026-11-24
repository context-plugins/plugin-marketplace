using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// A session's public share-link state (share modal reads/writes this).
/// </summary>
public record SessionShareInfo
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("shareToken")]
    public required string ShareToken { get; init; }

    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("isActive")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("viewCount")]
    public required int ViewCount { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("shareUrl")]
    public required string ShareUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
