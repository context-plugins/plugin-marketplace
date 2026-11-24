using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for migrating Iceberg metadata.
/// </summary>
public record IcebergConfig
{
    /// <summary>
    /// Required. The target catalog for migrated Iceberg metadata. Format: "projects/{project_id_or_number}/catalogs/{catalog_id}"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalog")]
    public string? Catalog { get; init; }

    /// <summary>
    /// Required. The list of namespaces to migrate to the Iceberg REST catalog. Use "*" to migrate all namespaces. Note: If Hive tables exist in these namespaces, they will only be migrated if hive_config is also specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("namespaces")]
    public IReadOnlyList<string>? Namespaces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
