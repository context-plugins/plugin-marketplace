using Archbee.Models;

namespace Archbee.Requests.SpaceGroups;

/// <summary>
/// The inputs of the DeleteSpaceGroup operation.
/// </summary>
public sealed record DeleteSpaceGroupRequest
{
    public required SpaceGroupDeleteRequest Body { get; init; }
}
