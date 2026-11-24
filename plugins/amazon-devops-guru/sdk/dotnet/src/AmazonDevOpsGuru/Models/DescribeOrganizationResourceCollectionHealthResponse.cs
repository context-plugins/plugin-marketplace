using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record DescribeOrganizationResourceCollectionHealthResponse
{
    /// <summary>
    /// The returned CloudFormationHealthOverview object that contains an InsightHealthOverview object with the requested system health information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudFormation")]
    public IReadOnlyList<CloudFormationHealth>? CloudFormation { get; init; }

    /// <summary>
    /// An array of ServiceHealth objects that describes the health of the Amazon Web Services services associated with the resources in the collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Service")]
    public IReadOnlyList<ServiceHealth>? Service { get; init; }

    /// <summary>
    /// The name of the organization's account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Account")]
    public IReadOnlyList<AccountHealth>? Account { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A tag key (for example, CostCenter, Environment, Project, or Secret). Tag keys are case-sensitive. An optional field known
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<TagHealth>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
