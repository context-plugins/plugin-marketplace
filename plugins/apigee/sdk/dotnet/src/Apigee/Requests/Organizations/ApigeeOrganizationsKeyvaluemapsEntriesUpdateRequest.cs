using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsKeyvaluemapsEntriesUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

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
