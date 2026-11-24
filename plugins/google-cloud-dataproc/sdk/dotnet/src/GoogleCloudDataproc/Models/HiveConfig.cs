using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for migrating Hive metadata.
/// </summary>
public record HiveConfig
{
    /// <summary>
    /// Required. The target catalog for migrated databases and tables. Format: "projects/{project_id_or_number}/catalogs/{catalog_id}"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalog")]
    public string? Catalog { get; init; }

    /// <summary>
    /// Required. The list of databases to migrate to the Hive catalog. Use "*" to migrate all databases. Note: If Iceberg tables exist in these databases, they will only be migrated if iceberg_config is also specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databases")]
    public IReadOnlyList<string>? Databases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
