using System;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

/// <summary>
/// The shareable report for this result (create_report: true), or null when none was made.
/// </summary>
public record Report
{
    /// <summary>
    /// When the link stops resolving unless revoked or deleted sooner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// AI detector history entry id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shared_at")]
    public DateTimeOffset? SharedAt { get; init; }

    /// <summary>
    /// Public report link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
