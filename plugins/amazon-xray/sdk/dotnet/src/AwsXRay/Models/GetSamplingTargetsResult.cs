using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetSamplingTargetsResult
{
    /// <summary>
    /// Updated rules that the service should use to sample requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingTargetDocuments")]
    public IReadOnlyList<SamplingTargetDocument>? SamplingTargetDocuments { get; init; }

    /// <summary>
    /// The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call GetSamplingRules to get the latest version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastRuleModification")]
    public DateTimeOffset? LastRuleModification { get; init; }

    /// <summary>
    /// Information about SamplingStatisticsDocument that X-Ray could not process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnprocessedStatistics")]
    public IReadOnlyList<UnprocessedStatistics>? UnprocessedStatistics { get; init; }

    /// <summary>
    /// Information about SamplingBoostStatisticsDocument that X-Ray could not process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnprocessedBoostStatistics")]
    public IReadOnlyList<UnprocessedStatistics>? UnprocessedBoostStatistics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
