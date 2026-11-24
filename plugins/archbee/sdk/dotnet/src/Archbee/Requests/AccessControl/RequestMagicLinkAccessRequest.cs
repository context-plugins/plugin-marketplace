using Archbee.Models;

namespace Archbee.Requests.AccessControl;

/// <summary>
/// The inputs of the RequestMagicLinkAccess operation.
/// </summary>
public sealed record RequestMagicLinkAccessRequest
{
    public required AccessControlRequestRequest Body { get; init; }
}
