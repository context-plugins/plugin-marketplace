using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Defines the configuration required to migrate metadata from a Dataproc Metastore service to BigLake Metastore.
/// </summary>
public record BigLakeMetastoreMigrationConfig
{
    /// <summary>
    /// Optional. If true, performs discovery of requested resources and analysis against the target catalog to come up with a plan for each resource (e.g. Create, Update, Skip, etc.). No metadata is actually migrated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dryRun")]
    public bool? DryRun { get; init; }

    /// <summary>
    /// Output only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backfillStatus")]
    public BackfillStatus2? BackfillStatus { get; init; }

    /// <summary>
    /// Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conflictPolicy")]
    public ConflictPolicy? ConflictPolicy { get; init; }

    /// <summary>
    /// Required. Defines the behavior of the migration execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// Optional. Configuration for migrating Iceberg tables to a BigLake Iceberg REST catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icebergConfig")]
    public IcebergConfig1? IcebergConfig { get; init; }

    /// <summary>
    /// Optional. The Cloud Storage path where the backfill / dry run report should be written. If not provided, the report will be generated in the service's artifacts bucket. Format: "gs://path/to/folder"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportPath")]
    public string? ReportPath { get; init; }

    /// <summary>
    /// Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a validation error will be thrown. If only one is provided, the service only migrates tables of that specific type. If both are provided, both Hive and Iceberg tables will be migrated.Configuration for migrating Hive tables to a BigLake Hive catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiveConfig")]
    public HiveConfig1? HiveConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
