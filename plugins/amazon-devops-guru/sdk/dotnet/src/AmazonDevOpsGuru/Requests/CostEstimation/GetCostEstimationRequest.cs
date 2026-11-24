namespace AmazonDevOpsGuru.Requests.CostEstimation;

/// <summary>
/// The inputs of the GetCostEstimation operation.
/// </summary>
public sealed record GetCostEstimationRequest
{
    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
    /// </summary>
    public string? NextToken { get; init; }
}
