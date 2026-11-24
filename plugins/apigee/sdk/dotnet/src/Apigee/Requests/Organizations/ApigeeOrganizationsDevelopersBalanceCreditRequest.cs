using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersBalanceCredit operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersBalanceCreditRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    public required GoogleCloudApigeeV1CreditDeveloperBalanceRequest Body { get; init; }
}
