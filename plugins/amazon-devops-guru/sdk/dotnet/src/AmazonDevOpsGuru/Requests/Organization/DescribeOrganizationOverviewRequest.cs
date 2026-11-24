using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Organization;

/// <summary>
/// The inputs of the DescribeOrganizationOverview operation.
/// </summary>
public sealed record DescribeOrganizationOverviewRequest
{
    public OrganizationOverviewRequest? Body { get; init; }
}
