using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record DeleteSamplingRuleRequest
{
    /// <summary>
    /// The name of the sampling rule. Specify a rule by either name or ARN, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleName")]
    public string? RuleName { get; init; }

    /// <summary>
    /// The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleARN")]
    public string? RuleArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
