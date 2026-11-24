using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record CloudFormationHealth
{
    /// <summary>
    /// The name of the CloudFormation stack.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StackName")]
    public string? StackName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Insight")]
    public InsightHealth? Insight { get; init; }

    /// <summary>
    /// Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services CloudFormation stack.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnalyzedResourceCount")]
    public int? AnalyzedResourceCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
