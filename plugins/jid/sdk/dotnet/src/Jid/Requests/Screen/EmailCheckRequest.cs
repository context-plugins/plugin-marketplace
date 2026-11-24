using Jid.Models;

namespace Jid.Requests.Screen;

/// <summary>
/// The inputs of the EmailCheck operation.
/// </summary>
public sealed record EmailCheckRequest
{
    public required V1EmailCheckRequest Body { get; init; }
}
