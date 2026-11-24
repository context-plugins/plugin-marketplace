using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. The Lakehouse proxy routing configuration for the metastore service.
/// </summary>
public record LakehouseProxyConfig2
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
