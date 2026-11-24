using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingBoostStatisticsDocument
{
    /// <summary>
    /// The name of the sampling rule.
    /// </summary>
    [JsonPropertyName("RuleName")]
    public required string RuleName { get; init; }

    /// <summary>
    /// Matches the name that the service uses to identify itself in segments.
    /// </summary>
    [JsonPropertyName("ServiceName")]
    public required string ServiceName { get; init; }

    /// <summary>
    /// The current time.
    /// </summary>
    [JsonPropertyName("Timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// The number of requests with anomaly.
    /// </summary>
    [JsonPropertyName("AnomalyCount")]
    public required int AnomalyCount { get; init; }

    /// <summary>
    /// The number of requests that associated to the rule.
    /// </summary>
    [JsonPropertyName("TotalCount")]
    public required int TotalCount { get; init; }

    /// <summary>
    /// The number of requests with anomaly recorded.
    /// </summary>
    [JsonPropertyName("SampledAnomalyCount")]
    public required int SampledAnomalyCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
