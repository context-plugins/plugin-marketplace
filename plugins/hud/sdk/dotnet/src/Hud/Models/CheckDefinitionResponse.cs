using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A discoverable platform check definition.
/// </summary>
public record CheckDefinitionResponse
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("definition_version")]
    public required int DefinitionVersion { get; init; }

    [JsonPropertyName("subject_types")]
    public required IReadOnlyList<CheckSubjectType> SubjectTypes { get; init; }

    /// <summary>
    /// Execution mechanisms supported by a check definition.
    /// </summary>
    [JsonPropertyName("executor_type")]
    public required CheckExecutorType ExecutorType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
