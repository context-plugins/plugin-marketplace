using Bitly.Models;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the UpdateGroup operation.
/// </summary>
public sealed record UpdateGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    public required GroupUpdate Body { get; init; }
}
