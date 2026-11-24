using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A managed metastore service that serves metadata queries.
/// </summary>
public record Service
{
    /// <summary>
    /// Optional. The TCP port at which the metastore service is reached. Default: 9083.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// Optional. The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maintenanceWindow")]
    public MaintenanceWindow2? MaintenanceWindow { get; init; }

    /// <summary>
    /// Immutable. The database type that the Metastore service stores its data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseType")]
    public DatabaseType? DatabaseType { get; init; }

    /// <summary>
    /// Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactGcsUri")]
    public string? ArtifactGcsUri { get; init; }

    /// <summary>
    /// Output only. The time when the metastore service was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. The tier of the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public Tier? Tier { get; init; }

    /// <summary>
    /// Optional. The setting that defines how metastore metadata should be integrated with external services and systems.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadataIntegration")]
    public MetadataIntegration1? MetadataIntegration { get; init; }

    /// <summary>
    /// Output only. Additional information about the current state of the metastore service, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    /// <summary>
    /// Optional. The configuration specifying the network settings for the Dataproc Metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkConfig")]
    public NetworkConfig3? NetworkConfig { get; init; }

    /// <summary>
    /// Output only. The URI of the endpoint used to access the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointUri")]
    public string? EndpointUri { get; init; }

    /// <summary>
    /// Immutable. The release channel of the service. If unspecified, defaults to STABLE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("releaseChannel")]
    public ReleaseChannel? ReleaseChannel { get; init; }

    /// <summary>
    /// Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionConfig")]
    public EncryptionConfig22? EncryptionConfig { get; init; }

    /// <summary>
    /// Optional. The configuration of scheduled backup for the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduledBackup")]
    public ScheduledBackup2? ScheduledBackup { get; init; }

    /// <summary>
    /// Output only. The time when the metastore service was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Scaling configuration of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scalingConfig")]
    public ScalingConfig2? ScalingConfig { get; init; }

    /// <summary>
    /// Output only. The metadata management activities of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadataManagementActivity")]
    public MetadataManagementActivity2? MetadataManagementActivity { get; init; }

    /// <summary>
    /// Output only. The current state of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State11? State { get; init; }

    /// <summary>
    /// Immutable. Identifier. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Configuration information specific to running Hive metastore software as the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiveMetastoreConfig")]
    public HiveMetastoreConfig2? HiveMetastoreConfig { get; init; }

    /// <summary>
    /// User-defined labels for the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Output only. The Lakehouse proxy routing configuration for the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lakehouseProxyConfig")]
    public LakehouseProxyConfig2? LakehouseProxyConfig { get; init; }

    /// <summary>
    /// Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("telemetryConfig")]
    public TelemetryConfig2? TelemetryConfig { get; init; }

    /// <summary>
    /// Optional. Indicates if the dataproc metastore should be protected against accidental deletions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletionProtection")]
    public bool? DeletionProtection { get; init; }

    /// <summary>
    /// Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network")]
    public string? Network { get; init; }

    /// <summary>
    /// Output only. The globally unique resource identifier of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
