using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiGetDatasourceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasource")]
    public PublicApiDatasourceDto? Datasource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
