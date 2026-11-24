using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingBoost
{
    /// <summary>
    /// The calculated sampling boost rate for this service
    /// </summary>
    [JsonPropertyName("BoostRate")]
    public required double BoostRate { get; init; }

    /// <summary>
    /// When the sampling boost expires.
    /// </summary>
    [JsonPropertyName("BoostRateTTL")]
    public required DateTimeOffset BoostRateTtl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
