using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Name of the environment.
    /// </summary>
    public string? Name { get; init; }

    public required GoogleCloudApigeeV1Environment Body { get; init; }
}
