using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsKeyvaluemapsEntriesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (keyvaluemapsId).
    /// </summary>
    public required string KeyvaluemapsId { get; init; }

    public required GoogleCloudApigeeV1KeyValueEntry Body { get; init; }
}
