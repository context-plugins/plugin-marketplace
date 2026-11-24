using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingTargetDocument
{
    /// <summary>
    /// The name of the sampling rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleName")]
    public string? RuleName { get; init; }

    /// <summary>
    /// The percentage of matching requests to instrument, after the reservoir is exhausted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FixedRate")]
    public double? FixedRate { get; init; }

    /// <summary>
    /// The number of requests per second that X-Ray allocated for this service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReservoirQuota")]
    public int? ReservoirQuota { get; init; }

    /// <summary>
    /// When the reservoir quota expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReservoirQuotaTTL")]
    public DateTimeOffset? ReservoirQuotaTtl { get; init; }

    /// <summary>
    /// The number of seconds for the service to wait before getting sampling targets again.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Interval")]
    public int? Interval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingBoost")]
    public SamplingBoost? SamplingBoost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
