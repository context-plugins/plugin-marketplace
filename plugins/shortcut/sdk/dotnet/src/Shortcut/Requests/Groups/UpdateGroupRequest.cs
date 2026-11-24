using System;
using Shortcut.Models;

namespace Shortcut.Requests.Groups;

/// <summary>
/// The inputs of the UpdateGroup operation.
/// </summary>
public sealed record UpdateGroupRequest
{
    /// <summary>
    /// The unique ID of the Group.
    /// </summary>
    public required Guid GroupPublicId { get; init; }

    public required UpdateGroup Body { get; init; }
}
