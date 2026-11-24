using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingStatisticSummary
{
    /// <summary>
    /// The name of the sampling rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleName")]
    public string? RuleName { get; init; }

    /// <summary>
    /// The start time of the reporting window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    /// <summary>
    /// The number of requests that matched the rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestCount")]
    public int? RequestCount { get; init; }

    /// <summary>
    /// The number of requests recorded with borrowed reservoir quota.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BorrowCount")]
    public int? BorrowCount { get; init; }

    /// <summary>
    /// The number of requests recorded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SampledCount")]
    public int? SampledCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
