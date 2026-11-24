using Archbee.Models;

namespace Archbee.Requests.SpaceGroups;

/// <summary>
/// The inputs of the CreateSpaceGroup operation.
/// </summary>
public sealed record CreateSpaceGroupRequest
{
    public required SpaceGroupCreateRequest Body { get; init; }
}
