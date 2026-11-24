using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

/// <summary>
/// What your account pays for this number type, plan-aware.
/// </summary>
public record NumberPricing
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("setupFee")]
    public double? SetupFee { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyFee")]
    public double? MonthlyFee { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("perMinuteRate")]
    public double? PerMinuteRate { get; init; }

    /// <summary>
    /// First month at your plan's rate (setupFee is always 0). 0 when the number is included in your subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalDueNow")]
    public double? TotalDueNow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedInSubscription")]
    public bool? IncludedInSubscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
