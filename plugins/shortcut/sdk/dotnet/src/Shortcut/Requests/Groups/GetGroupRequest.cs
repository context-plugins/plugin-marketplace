using System;

namespace Shortcut.Requests.Groups;

/// <summary>
/// The inputs of the GetGroup operation.
/// </summary>
public sealed record GetGroupRequest
{
    /// <summary>
    /// The unique ID of the Group.
    /// </summary>
    public required Guid GroupPublicId { get; init; }
}
