using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
/// </summary>
public record GoogleCloudApigeeV1Datastore
{
    /// <summary>
    /// Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. Organization that the datastore belongs to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("org")]
    public string? Org { get; init; }

    /// <summary>
    /// Datastore Configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastoreConfig")]
    public GoogleCloudApigeeV1DatastoreConfig2? DatastoreConfig { get; init; }

    /// <summary>
    /// Destination storage type. Supported types <c>gcs</c> or <c>bigquery</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetType")]
    public string? TargetType { get; init; }

    /// <summary>
    /// Required. Display name in UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdateTime")]
    public string? LastUpdateTime { get; init; }

    /// <summary>
    /// Output only. Resource link of Datastore. Example: <c>/organizations/{org}/analytics/datastores/{uuid}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
