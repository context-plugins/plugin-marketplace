using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsKeyvaluemapsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsKeyvaluemapsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1KeyValueMap Body { get; init; }
}
