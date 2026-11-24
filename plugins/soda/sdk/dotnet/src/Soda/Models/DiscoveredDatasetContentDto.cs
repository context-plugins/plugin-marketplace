using System;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DiscoveredDatasetContentDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("datasourceId")]
    public required string DatasourceId { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("onboarded")]
    public required bool Onboarded { get; init; }

    [JsonPropertyName("qualifiedName")]
    public required string QualifiedName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
