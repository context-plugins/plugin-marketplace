using Airtable.Models;

namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the UpdateScimGroup operation.
/// </summary>
public sealed record UpdateScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the SCIM group resource.
    /// </summary>
    public required string GroupId { get; init; }

    public required ScimPatchRequest Body { get; init; }
}
