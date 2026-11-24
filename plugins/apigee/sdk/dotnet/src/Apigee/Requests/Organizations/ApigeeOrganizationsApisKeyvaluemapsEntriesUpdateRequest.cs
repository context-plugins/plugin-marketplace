using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (keyvaluemapsId).
    /// </summary>
    public required string KeyvaluemapsId { get; init; }

    /// <summary>
    /// Resource name segment (entriesId).
    /// </summary>
    public required string EntriesId { get; init; }

    public required GoogleCloudApigeeV1KeyValueEntry Body { get; init; }
}
