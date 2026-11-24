using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record AtifFinalMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_prompt_tokens")]
    public TotalPromptTokens? TotalPromptTokens { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_completion_tokens")]
    public TotalCompletionTokens? TotalCompletionTokens { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_cached_tokens")]
    public TotalCachedTokens? TotalCachedTokens { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_cost_usd")]
    public TotalCostUsd? TotalCostUsd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_steps")]
    public TotalSteps? TotalSteps { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public Extra? Extra { get; init; }
}
