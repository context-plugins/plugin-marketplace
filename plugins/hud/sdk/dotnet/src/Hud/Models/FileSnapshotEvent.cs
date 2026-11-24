using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A post-setup workspace manifest of paths + hashes captured before the agent starts.
/// <para>
/// Emitted as ``filetracking.snapshot`` under ``hud.filetracking.v1``.
/// </para>
/// <para>
/// Build source plus :class:<c>FileSetupEvent</c> patches derive this state; applying
/// subsequent :class:<c>FileChangeEvent</c> patches reconstructs the agent timeline.
/// </para>
/// </summary>
public record FileSnapshotEvent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_id")]
    public ParentId? ParentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public StartedAt? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended_at")]
    public EndedAt? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seq")]
    public int? Seq { get; init; } = 0;

    [JsonPropertyName("kind")]
    public string Kind { get; } = "file_snapshot";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("files_scanned")]
    public int? FilesScanned { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("files")]
    public IReadOnlyList<FileManifestEntry>? Files { get; init; }
}
