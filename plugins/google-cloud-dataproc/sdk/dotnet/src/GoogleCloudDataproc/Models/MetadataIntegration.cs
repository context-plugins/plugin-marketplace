using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Specifies how metastore metadata should be integrated with external services.
/// </summary>
public record MetadataIntegration
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
