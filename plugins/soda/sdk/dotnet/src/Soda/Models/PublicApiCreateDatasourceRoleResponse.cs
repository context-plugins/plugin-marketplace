using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateDatasourceRoleResponse
{
    [JsonPropertyName("datasourceRole")]
    public required DatasourceRoleContentDto DatasourceRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
