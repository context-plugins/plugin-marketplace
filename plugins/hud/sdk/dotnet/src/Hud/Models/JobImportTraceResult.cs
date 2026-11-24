using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Outcome of one imported run.
/// <para>
/// In ``error`` and ``evaluation_result``, characters Postgres cannot store
/// become U+FFFD and non-finite numbers become null. A non-finite ``reward``
/// is refused.
/// </para>
/// </summary>
public record JobImportTraceResult
{
    [JsonPropertyName("status")]
    public required StatusHudPlatformJobsApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reward")]
    public Reward? Reward { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evaluation_result")]
    public EvaluationResult? EvaluationResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ErrorHudPlatformJobsApi? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_time")]
    public StartTime? StartTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_time")]
    public EndTime? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
