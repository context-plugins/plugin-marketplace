using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record SyncRun
{
    [JsonPropertyName("finishedAt")]
    public required string FinishedAt { get; init; }

    [JsonPropertyName("syncId")]
    public required double SyncId { get; init; }

    /// <summary>
    /// The status of sync runs
    /// </summary>
    [JsonPropertyName("status")]
    public required SyncRunStatus Status { get; init; }

    [JsonPropertyName("syncRunId")]
    public required double SyncRunId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
