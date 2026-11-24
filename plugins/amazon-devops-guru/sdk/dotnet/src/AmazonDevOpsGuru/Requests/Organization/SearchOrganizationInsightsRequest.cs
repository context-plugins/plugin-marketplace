using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Organization;

/// <summary>
/// The inputs of the SearchOrganizationInsights operation.
/// </summary>
public sealed record SearchOrganizationInsightsRequest
{
    public OrganizationInsightsSearchRequest? Body { get; init; }
}
