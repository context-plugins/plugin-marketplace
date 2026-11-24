using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Opt-in LLM judgement of the finished run. Presence of this object turns
/// the judge on (send {} for defaults); CP judges the run's trajectory after
/// it goes terminal and surfaces the verdict as RunSummary.judgement (null
/// until it lands). The judge's LLM call is billed to the run.
/// </summary>
public record RunJudgeSettings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public Context? Context { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
