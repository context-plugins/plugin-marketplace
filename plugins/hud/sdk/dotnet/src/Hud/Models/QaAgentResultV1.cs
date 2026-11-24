using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Versioned result every QA agent must emit.
/// </summary>
public record QaAgentResultV1
{
    [JsonPropertyName("schema_version")]
    public string SchemaVersion { get; } = "qa_agent_result.v1";

    [JsonPropertyName("verdict")]
    public required Verdict Verdict { get; init; }

    [JsonPropertyName("findings")]
    public required IReadOnlyList<QaAgentFinding> Findings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public Summary? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("execution_error")]
    public ExecutionError? ExecutionError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
