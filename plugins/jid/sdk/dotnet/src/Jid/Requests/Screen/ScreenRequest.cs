using Jid.Models;

namespace Jid.Requests.Screen;

/// <summary>
/// The inputs of the ScreenInvoke operation.
/// </summary>
public sealed record ScreenRequest
{
    public required V1ScreenRequest Body { get; init; }
}
