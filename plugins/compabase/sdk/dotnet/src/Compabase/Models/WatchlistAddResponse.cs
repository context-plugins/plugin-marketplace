using System;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record WatchlistAddResponse
{
    /// <summary>
    /// Normalized 10-digit KRS.
    /// </summary>
    [JsonPropertyName("krs")]
    public required string Krs { get; init; }

    /// <summary>
    /// Internal company identifier.
    /// </summary>
    [JsonPropertyName("entity_id")]
    public required Guid EntityId { get; init; }

    /// <summary>
    /// True if the company was already on the watchlist before this request.
    /// </summary>
    [JsonPropertyName("already_following")]
    public required bool AlreadyFollowing { get; init; }

    /// <summary>
    /// When the watchlist entry was created. Null when already_following is true and the original timestamp is unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Present and <c>true</c> only for <c>dry_run=true</c> requests — nothing was written.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dry_run")]
    public bool? DryRun { get; init; }

    /// <summary>
    /// Only with <c>dry_run=true</c> — whether a real request would add the company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("would_add")]
    public bool? WouldAdd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
