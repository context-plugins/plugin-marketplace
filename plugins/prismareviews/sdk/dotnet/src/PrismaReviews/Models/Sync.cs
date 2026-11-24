using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

/// <summary>
/// Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a row Prisma sends <c>location.sync_failed</c>, and <c>location.sync_recovered</c> on the next successful one.
/// </summary>
public record Sync
{
    /// <summary>
    /// Checks in a row that failed. <c>0</c> after a successful check.
    /// </summary>
    [JsonPropertyName("consecutive_failures")]
    public required int ConsecutiveFailures { get; init; }

    /// <summary>
    /// The last failed check's error (up to 300 characters, never keys or tokens). Kept after a recovery, as history.
    /// </summary>
    [JsonPropertyName("last_error")]
    public required string? LastError { get; init; }

    /// <summary>
    /// When the last check failed.
    /// </summary>
    [JsonPropertyName("last_error_at")]
    public required DateTimeOffset? LastErrorAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
