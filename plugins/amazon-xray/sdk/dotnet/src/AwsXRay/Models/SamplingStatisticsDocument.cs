using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingStatisticsDocument
{
    /// <summary>
    /// The name of the sampling rule.
    /// </summary>
    [JsonPropertyName("RuleName")]
    public required string RuleName { get; init; }

    /// <summary>
    /// A unique identifier for the service in hexadecimal.
    /// </summary>
    [JsonPropertyName("ClientID")]
    public required string ClientId { get; init; }

    /// <summary>
    /// The current time.
    /// </summary>
    [JsonPropertyName("Timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// The number of requests that matched the rule.
    /// </summary>
    [JsonPropertyName("RequestCount")]
    public required int RequestCount { get; init; }

    /// <summary>
    /// The number of requests recorded.
    /// </summary>
    [JsonPropertyName("SampledCount")]
    public required int SampledCount { get; init; }

    /// <summary>
    /// The number of requests recorded with borrowed reservoir quota.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BorrowCount")]
    public int? BorrowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
