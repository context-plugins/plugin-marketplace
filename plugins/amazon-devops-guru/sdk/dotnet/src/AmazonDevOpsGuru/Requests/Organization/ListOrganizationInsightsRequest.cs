using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Organization;

/// <summary>
/// The inputs of the ListOrganizationInsights operation.
/// </summary>
public sealed record ListOrganizationInsightsRequest
{
    public OrganizationInsightsRequest? Body { get; init; }
}
