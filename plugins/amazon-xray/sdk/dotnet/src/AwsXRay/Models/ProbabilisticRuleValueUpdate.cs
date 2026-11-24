using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ProbabilisticRuleValueUpdate
{
    /// <summary>
    /// Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of data.
    /// </summary>
    [JsonPropertyName("DesiredSamplingPercentage")]
    public required double DesiredSamplingPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
