using Airtable.Models;

namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the ReplaceScimGroup operation.
/// </summary>
public sealed record ReplaceScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the SCIM group resource.
    /// </summary>
    public required string GroupId { get; init; }

    public required ScimGroupCreateRequest Body { get; init; }
}
