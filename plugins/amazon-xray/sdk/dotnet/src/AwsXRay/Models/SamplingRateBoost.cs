using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingRateBoost
{
    /// <summary>
    /// Defines max temporary sampling rate to apply when a boost is triggered. Calculated boost rate by X-Ray will be less than or equal to this max rate.
    /// </summary>
    [JsonPropertyName("MaxRate")]
    public required double MaxRate { get; init; }

    /// <summary>
    /// Sets the time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs, no further boosts are allowed until the next window.
    /// </summary>
    [JsonPropertyName("CooldownWindowMinutes")]
    public required int CooldownWindowMinutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
