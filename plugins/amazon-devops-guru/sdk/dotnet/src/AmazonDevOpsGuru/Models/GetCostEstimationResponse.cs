using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record GetCostEstimationResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public CostEstimationResourceCollectionFilter? ResourceCollection { get; init; }

    /// <summary>
    /// The status of creating this cost estimate. If it's still in progress, the status ONGOING is returned. If it is finished, the status COMPLETED is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonDevOpsGuruCostEstimationApi? Status { get; init; }

    /// <summary>
    /// An array of ResourceCost objects that each contains details about the monthly cost estimate to analyze one of your Amazon Web Services resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Costs")]
    public IReadOnlyList<ServiceResourceCost>? Costs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeRange")]
    public CostEstimationTimeRange? TimeRange { get; init; }

    /// <summary>
    /// The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of the estimated costs to analyze each resource in the Costs object in this response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalCost")]
    public double? TotalCost { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
