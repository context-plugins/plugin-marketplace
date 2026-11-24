using System;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation.Attributes;
using Cloro.Models.Enums;

namespace Cloro.Models;

/// <summary>
/// Common task summary fields shared across async task responses.
/// </summary>
public record AsyncTaskSummary3
{
    /// <summary>
    /// Unique task identifier.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The AI provider for this task.
    /// </summary>
    [JsonPropertyName("taskType")]
    public required TaskType5 TaskType { get; init; }

    /// <summary>
    /// Current task status.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// Task priority level (1-10). Higher numbers are processed first. Defaults to 1.
    /// </summary>
    [JsonPropertyName("priority")]
    [Minimum(1)]
    [Maximum(10)]
    public required int Priority { get; init; }

    /// <summary>
    /// Timestamp when the task was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Processing time in milliseconds, from first pickup to the final outcome. Excludes the initial queue wait, but on a retried task covers every attempt including the backoff between them. Null while the task is <c>QUEUED</c> or <c>PROCESSING</c>, and on a task that failed before processing started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latencyMs")]
    public int? LatencyMs { get; init; }

    /// <summary>
    /// The idempotency key if one was provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyKey")]
    public string? IdempotencyKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
