using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesId).
    /// </summary>
    public required string SecurityProfilesId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    public required GoogleCloudApigeeV1ComputeEnvironmentScoresRequest Body { get; init; }
}
