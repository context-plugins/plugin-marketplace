using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record IncidentContentDto
{
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolutionNotes")]
    public string? ResolutionNotes { get; init; }

    [JsonPropertyName("severity")]
    public required IncidentSeverityDto Severity { get; init; }

    [JsonPropertyName("cloudUrl")]
    public required string CloudUrl { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("number")]
    public required int Number { get; init; }

    [JsonPropertyName("status")]
    public required IncidentStatusDto Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
