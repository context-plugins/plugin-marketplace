using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// The result every QA check yields.
/// <para>
/// A check fails on a confirmed problem and otherwise passes; ``unknown`` remains
/// for results recorded before ``execution_error``. A check whose input leaves
/// nothing to judge passes and names that stage in ``execution_error``. A failure
/// a rerun may fix, such as input that did not load or an answer that did not
/// parse, ends the run with an error instead of yielding a result.
/// </para>
/// </summary>
public record QaCheckResultV1
{
    [JsonPropertyName("schema_version")]
    public string SchemaVersion { get; } = "qa_agent_result.v1";

    [JsonPropertyName("verdict")]
    public required Verdict Verdict { get; init; }

    [JsonPropertyName("findings")]
    public required IReadOnlyList<QaCheckFindingV1> Findings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public Summary? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("execution_error")]
    public ExecutionError? ExecutionError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
