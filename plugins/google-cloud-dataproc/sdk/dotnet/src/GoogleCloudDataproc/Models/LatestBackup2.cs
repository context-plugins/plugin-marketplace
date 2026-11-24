using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. The details of the latest scheduled backup.
/// </summary>
public record LatestBackup2
{
    /// <summary>
    /// Output only. The ID of an in-progress scheduled backup. Empty if no backup is in progress.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backupId")]
    public string? BackupId { get; init; }

    /// <summary>
    /// Output only. The current state of the backup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State8? State { get; init; }

    /// <summary>
    /// Output only. The duration of the backup completion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public string? Duration { get; init; }

    /// <summary>
    /// Output only. The time when the backup was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
