using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Organization;

/// <summary>
/// The inputs of the DescribeOrganizationHealth operation.
/// </summary>
public sealed record DescribeOrganizationHealthRequest
{
    public OrganizationHealthRequest? Body { get; init; }
}
