using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record CostEstimationResourceCollectionFilter
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudFormation")]
    public CloudFormationCostEstimationResourceCollectionFilter? CloudFormation { get; init; }

    /// <summary>
    /// The Amazon Web Services tags used to filter the resource collection that is used for a cost estimate. Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A tag key (for examp
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<TagCostEstimationResourceCollectionFilter>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
