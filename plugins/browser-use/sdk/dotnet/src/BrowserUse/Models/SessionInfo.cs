using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

/// <summary>
/// Lightweight metadata for one V4 session (its most recent run).
/// <para>
/// Deliberately slim — just what a session list needs (open the conversation,
/// show a label + status + time). The heavy per-run fields (result, error,
/// token/cost totals) live on RunSummary and aren't repeated here.
/// </para>
/// </summary>
public record SessionInfo
{
    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("workspaceId")]
    public required Workspaceid WorkspaceId { get; init; }

    [JsonPropertyName("latestRunId")]
    public required Guid LatestRunId { get; init; }

    [JsonPropertyName("task")]
    public required string Task { get; init; }

    [JsonPropertyName("title")]
    public required Title Title { get; init; }

    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
