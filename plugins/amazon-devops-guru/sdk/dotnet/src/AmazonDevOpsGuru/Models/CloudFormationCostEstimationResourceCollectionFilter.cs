using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record CloudFormationCostEstimationResourceCollectionFilter
{
    /// <summary>
    /// An array of CloudFormation stack names. Its size is fixed at 1 item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StackNames")]
    public IReadOnlyList<string>? StackNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
