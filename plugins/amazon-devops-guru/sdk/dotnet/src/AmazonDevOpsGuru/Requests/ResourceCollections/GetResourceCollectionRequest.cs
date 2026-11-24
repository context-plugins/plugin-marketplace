using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Requests.ResourceCollections;

/// <summary>
/// The inputs of the GetResourceCollection operation.
/// </summary>
public sealed record GetResourceCollectionRequest
{
    /// <summary>
    /// The type of Amazon Web Services resource collections to return. The one valid value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
    /// </summary>
    public required ResourceCollectionType ResourceCollectionType { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
    /// </summary>
    public string? NextToken { get; init; }
}
