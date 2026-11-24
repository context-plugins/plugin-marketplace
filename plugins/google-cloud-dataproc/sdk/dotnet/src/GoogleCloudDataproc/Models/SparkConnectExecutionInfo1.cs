using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Spark Connect Execution Info
/// </summary>
public record SparkConnectExecutionInfo1
{
    /// <summary>
    /// Optional. Tags associated with the Spark session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkSessionTags")]
    public IReadOnlyList<string>? SparkSessionTags { get; init; }

    /// <summary>
    /// Output only. Current state of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State3? State { get; init; }

    /// <summary>
    /// statement of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statement")]
    public string? Statement { get; init; }

    /// <summary>
    /// Optional. List of job ids associated with the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobIds")]
    public IReadOnlyList<string>? JobIds { get; init; }

    /// <summary>
    /// Timestamp when the execution was closed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeTimestamp")]
    public string? CloseTimestamp { get; init; }

    /// <summary>
    /// Timestamp when the execution started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimestamp")]
    public string? StartTimestamp { get; init; }

    /// <summary>
    /// Required. Session ID, ties the execution to a specific Spark Connect session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// Timestamp when the execution finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("finishTimestamp")]
    public string? FinishTimestamp { get; init; }

    /// <summary>
    /// Detailed information about the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// User ID of the user who started the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// Required. Job tag of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTag")]
    public string? JobTag { get; init; }

    /// <summary>
    /// Unique identifier for the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationId")]
    public string? OperationId { get; init; }

    /// <summary>
    /// Optional. List of sql execution ids associated with the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlExecIds")]
    public IReadOnlyList<string>? SqlExecIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
