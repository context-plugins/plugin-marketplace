using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateDatasourceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasource")]
    public PublicApiDatasourceDto? Datasource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discoveryScanId")]
    public string? DiscoveryScanId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
