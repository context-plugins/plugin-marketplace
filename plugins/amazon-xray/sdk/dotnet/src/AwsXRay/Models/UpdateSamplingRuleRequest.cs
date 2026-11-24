using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record UpdateSamplingRuleRequest
{
    [JsonPropertyName("SamplingRuleUpdate")]
    public required SamplingRuleUpdate SamplingRuleUpdate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
