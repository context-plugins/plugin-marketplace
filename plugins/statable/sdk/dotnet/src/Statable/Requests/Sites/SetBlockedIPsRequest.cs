using System.Collections.Generic;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the SetBlockedIPs operation.
/// </summary>
public sealed record SetBlockedIPsRequest
{
    public required long Id { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
