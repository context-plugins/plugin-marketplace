using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Wire-compatible subset of ``hud.eval.runtime.RuntimeLimits``.
/// </summary>
public record SubmittedRuntimeLimits
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startup_timeout_s")]
    public StartupTimeoutS? StartupTimeoutS { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("run_timeout_s")]
    public RunTimeoutS? RunTimeoutS { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
