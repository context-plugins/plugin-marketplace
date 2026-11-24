using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A representation of a batch workload in the service.
/// </summary>
public record Batch
{
    /// <summary>
    /// Optional. PySpark notebook batch config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pysparkNotebookBatch")]
    public PySparkNotebookBatch1? PysparkNotebookBatch { get; init; }

    /// <summary>
    /// Output only. The time when the batch was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Environment configuration for the batch execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentConfig")]
    public EnvironmentConfig3? EnvironmentConfig { get; init; }

    /// <summary>
    /// Optional. Spark batch config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkBatch")]
    public SparkBatch2? SparkBatch { get; init; }

    /// <summary>
    /// Optional. PySpark batch config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pysparkBatch")]
    public PySparkBatch1? PysparkBatch { get; init; }

    /// <summary>
    /// Output only. Historical state information for the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateHistory")]
    public IReadOnlyList<StateHistory>? StateHistory { get; init; }

    /// <summary>
    /// Optional. SparkSql batch config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkSqlBatch")]
    public SparkSqlBatch1? SparkSqlBatch { get; init; }

    /// <summary>
    /// Output only. Runtime information about batch execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeInfo")]
    public RuntimeInfo2? RuntimeInfo { get; init; }

    /// <summary>
    /// Output only. The resource name of the operation associated with this batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public string? Operation { get; init; }

    /// <summary>
    /// Output only. The email address of the user who created the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creator")]
    public string? Creator { get; init; }

    /// <summary>
    /// Output only. The time when the batch entered a current state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateTime")]
    public string? StateTime { get; init; }

    /// <summary>
    /// Output only. The resource name of the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. SparkR batch config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkRBatch")]
    public SparkRBatch2? SparkRBatch { get; init; }

    /// <summary>
    /// Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Output only. The state of the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State7? State { get; init; }

    /// <summary>
    /// Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. Runtime configuration for the batch execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeConfig")]
    public RuntimeConfig3? RuntimeConfig { get; init; }

    /// <summary>
    /// Output only. Batch state details, such as a failure description if the state is FAILED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
