using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The setting that defines how metastore metadata should be integrated with external services and systems.
/// </summary>
public record MetadataIntegration1
{
    /// <summary>
    /// Optional. The integration config for the Data Catalog service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataCatalogConfig")]
    public DataCatalogConfig2? DataCatalogConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
