using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Requests.Accounts;

/// <summary>
/// The inputs of the DescribeResourceCollectionHealth operation.
/// </summary>
public sealed record DescribeResourceCollectionHealthRequest
{
    /// <summary>
    /// An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
    /// </summary>
    public required ResourceCollectionType ResourceCollectionType { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
    /// </summary>
    public string? NextToken { get; init; }
}
