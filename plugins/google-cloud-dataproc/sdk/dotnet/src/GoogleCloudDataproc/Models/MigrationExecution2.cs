using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Required. The configuration details for the migration.
/// </summary>
public record MigrationExecution2
{
    /// <summary>
    /// Output only. The relative resource name of the migration execution, in the following form: projects/{project_number}/locations/{location_id}/services/{service_id}/migrationExecutions/{migration_execution_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The current state of the migration execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State14? State { get; init; }

    /// <summary>
    /// Configuration information specific to migrating from Dataproc Metastore to BigLake Metastore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("biglakeMetastoreMigrationConfig")]
    public BigLakeMetastoreMigrationConfig2? BiglakeMetastoreMigrationConfig { get; init; }

    /// <summary>
    /// Output only. Additional information about the current state of the migration execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    /// <summary>
    /// Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when migrating away from it. The current phase of the migration execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase? Phase { get; init; }

    /// <summary>
    /// Output only. The time when the migration execution was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The time when the migration execution finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
