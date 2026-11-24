using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisKeyvaluemapsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsApisKeyvaluemapsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    public required GoogleCloudApigeeV1KeyValueMap Body { get; init; }
}
