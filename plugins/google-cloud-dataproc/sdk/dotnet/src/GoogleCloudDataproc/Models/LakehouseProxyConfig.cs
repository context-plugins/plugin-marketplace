using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Configuration for Dataproc Metastore to Lakehouse proxy routing.In a phased migration, namespaces are migrated from Dataproc Metastore to a Lakehouse Iceberg REST Catalog in batches. Between and after migration phases, the metastore service operates in PROXY state where requests for migrated namespaces are forwarded to the Lakehouse catalog while unmigrated namespaces continue to be served locally by DPMS.
/// </summary>
public record LakehouseProxyConfig
{
    /// <summary>
    /// Output only. The list of namespaces currently proxied to the Lakehouse catalog. As each migration batch completes, newly migrated namespaces are added to this list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("namespaces")]
    public IReadOnlyList<string>? Namespaces { get; init; }

    /// <summary>
    /// Output only. The Lakehouse Iceberg REST Catalog where requests are being proxied to. Format: projects/{project_id_or_number}/catalogs/{catalog_id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catalog")]
    public string? Catalog { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
