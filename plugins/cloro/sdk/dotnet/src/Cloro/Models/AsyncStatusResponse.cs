using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record AsyncStatusResponse
{
    /// <summary>
    /// Number of tasks currently queued for this organization (status <c>QUEUED</c>).
    /// </summary>
    [JsonPropertyName("queuedTasks")]
    public required int QueuedTasks { get; init; }

    /// <summary>
    /// Number of tasks currently being processed for this organization (status <c>PROCESSING</c>).
    /// </summary>
    [JsonPropertyName("processingTasks")]
    public required int ProcessingTasks { get; init; }

    /// <summary>
    /// Queued task counts per priority level, ordered by priority descending. Only includes priority levels that have queued tasks.
    /// </summary>
    [JsonPropertyName("priorityBreakdown")]
    public required IReadOnlyList<PriorityBreakdown> PriorityBreakdown { get; init; }

    /// <summary>
    /// Current concurrency usage. Null if unable to retrieve concurrency information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("concurrency")]
    public Concurrency? Concurrency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
