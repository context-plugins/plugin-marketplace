using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersSubscriptionsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersSubscriptionsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    public required GoogleCloudApigeeV1DeveloperSubscription Body { get; init; }
}
