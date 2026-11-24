using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The integration config for the Data Catalog service.
/// </summary>
public record DataCatalogConfig2
{
    /// <summary>
    /// Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
