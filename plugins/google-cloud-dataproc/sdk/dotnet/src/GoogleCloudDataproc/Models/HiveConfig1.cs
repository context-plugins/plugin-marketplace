using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a validation error will be thrown. If only one is provided, the service only migrates tables of that specific type. If both are provided, both Hive and Iceberg tables will be migrated.Configuration for migrating Hive tables to a BigLake Hive catalog.
/// </summary>
public record HiveConfig1
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
