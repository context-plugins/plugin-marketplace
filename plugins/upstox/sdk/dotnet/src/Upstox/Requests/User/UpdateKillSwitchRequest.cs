using System.Collections.Generic;
using Upstox.Models;

namespace Upstox.Requests.User;

/// <summary>
/// The inputs of the UpdateKillSwitch operation.
/// </summary>
public sealed record UpdateKillSwitchRequest
{
    public required IReadOnlyList<KillSwitchSegmentUpdateRequest> Body { get; init; }
}
