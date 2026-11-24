using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Organization;

/// <summary>
/// The inputs of the DescribeOrganizationResourceCollectionHealth operation.
/// </summary>
public sealed record DescribeOrganizationResourceCollectionHealthRequest
{
    public OrganizationHealthResourceCollectionRequest? Body { get; init; }
}
