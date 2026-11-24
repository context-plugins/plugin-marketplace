using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DataStandardScopeMatchingDatasetContentDto
{
    [JsonPropertyName("datasourceId")]
    public required string DatasourceId { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qualifiedName")]
    public string? QualifiedName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
