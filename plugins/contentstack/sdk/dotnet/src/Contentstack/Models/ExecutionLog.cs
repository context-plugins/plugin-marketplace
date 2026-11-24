using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// A record of a single automation execution run.
/// </summary>
public record ExecutionLog
{
    /// <summary>
    /// Unique identifier of the execution log entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// UID of the automation that was executed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("automation_uid")]
    public string? AutomationUid { get; init; }

    /// <summary>
    /// Outcome status of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusContentstackAutomateManagementExecutionLogsApi? Status { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the execution started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the execution completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public DateTimeOffset? CompletedAt { get; init; }

    /// <summary>
    /// Step-by-step execution results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("steps")]
    public IReadOnlyList<object>? Steps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
