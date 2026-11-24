using System.Text.Json.Serialization;
using Stoplight.Core.Models;
using Stoplight.Models.Enums;

namespace Stoplight.Models;

public record Data
{
    [JsonPropertyName("endpointCount")]
    public required double EndpointCount { get; init; }

    [JsonPropertyName("format")]
    public required Format1 Format { get; init; }

    [JsonPropertyName("projectId")]
    public required string ProjectId { get; init; }

    [JsonPropertyName("schemaCount")]
    public required double SchemaCount { get; init; }

    [JsonPropertyName("testCount")]
    public required double TestCount { get; init; }

    [JsonPropertyName("textSectionCount")]
    public required double TextSectionCount { get; init; }

    [JsonPropertyName("traitCount")]
    public required double TraitCount { get; init; }

    [JsonPropertyName("versionId")]
    public required string VersionId { get; init; }

    [JsonPropertyName("workspaceId")]
    public required string WorkspaceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
